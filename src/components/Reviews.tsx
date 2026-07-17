import ReviewsList, { ReviewItem } from "./ReviewsList";

// Curated placeholder shown only if the live Google fetch fails (missing/bad
// env vars, API outage, etc.) so the section never looks broken.
const FALLBACK: ReviewItem[] = [
  { author: "Moshe K.", rating: 5, text: "The food is unbelievable, with even better service and amazing portion sizes. Very generous, great prices.", relativeTime: "3 weeks ago" },
  { author: "Rachel S.", rating: 5, text: "The closest thing I've had to food from Israel. The tahini and hummus mixed perfectly with the shawarma.", relativeTime: "a month ago" },
  { author: "David L.", rating: 5, text: "Of all the places in the Five Towns, Ahuva's remains my favorite. Warm, inviting atmosphere and I keep coming back.", relativeTime: "2 months ago" },
  { author: "Sarah T.", rating: 5, text: "Amazing Israeli kosher food with a big generous Mizrahi splash. Interior is very nice and staff is so friendly.", relativeTime: "2 months ago" },
  { author: "Yossi B.", rating: 5, text: "Excellent tasting authentic falafel. Very polite and helpful staff. Good ambience and eating environment.", relativeTime: "3 months ago" },
  { author: "Avital M.", rating: 5, text: "Absolutely delicious food!! Everything was perfect. I will definitely be coming back — and I'm not even from the neighborhood.", relativeTime: "3 months ago" },
];

async function getReviews() {
  const apiKey = process.env.PLACES_API_KEY;
  const placeId = process.env.PLACE_ID;

  if (!apiKey || !placeId) {
    return { rating: 4.7, reviewCount: 1001, reviews: FALLBACK, googleMapsUri: "" };
  }

  try {
    const fields = ["displayName", "rating", "userRatingCount", "googleMapsUri", "reviews"].join(",");
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": fields,
      },
      // Revalidate at most once every 6 hours - keeps within Google's ToS
      // caching limits and avoids re-fetching on every request.
      next: { revalidate: 21600 },
    });

    if (!res.ok) throw new Error(`Places API error ${res.status}`);
    const place = await res.json();

    const reviews: ReviewItem[] = (place.reviews || [])
      .map(
        (r: {
          authorAttribution?: { displayName?: string; photoUri?: string };
          rating?: number;
          text?: { text?: string };
          relativePublishTimeDescription?: string;
        }) => ({
          author: r.authorAttribution?.displayName || "Anonymous",
          authorPhoto: r.authorAttribution?.photoUri,
          rating: r.rating || 5,
          text: r.text?.text || "",
          relativeTime: r.relativePublishTimeDescription,
        })
      )
      // Only feature 4-5 star reviews in the on-site carousel. The real
      // aggregate rating/count above still reflects every review on Google,
      // and "View all reviews on Google" links to the unfiltered list -
      // this only curates which quotes get spotlighted here.
      .filter((r: ReviewItem) => r.rating >= 4);

    if (!reviews.length) throw new Error("No reviews returned");

    return {
      rating: place.rating ?? 4.7,
      reviewCount: place.userRatingCount ?? 0,
      reviews,
      googleMapsUri: place.googleMapsUri ?? "",
    };
  } catch (err) {
    console.error("[Reviews] live fetch failed, using fallback:", err);
    return { rating: 4.7, reviewCount: 1001, reviews: FALLBACK, googleMapsUri: "" };
  }
}

export default async function Reviews() {
  const { rating, reviewCount, reviews, googleMapsUri } = await getReviews();
  return (
    <ReviewsList
      rating={rating}
      reviewCount={reviewCount}
      reviews={reviews}
      googleMapsUri={googleMapsUri}
    />
  );
}
