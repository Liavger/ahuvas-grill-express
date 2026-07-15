import type { Metadata } from "next";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/cormorant-garamond/700-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahuva's Grill Express | Glatt Kosher Israeli Grill — Lawrence, NY",
  description: "Freshly carved shawarma, homemade salads, and authentic Israeli recipes. Glatt Kosher certified by the Vaad Hakashrus of the Five Towns. Proudly serving the Five Towns for over 15 years.",
  openGraph: {
    title: "Ahuva's Grill Express",
    description: "Where Israel meets New York, one bite at a time.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
