import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'Beas View Pool Bara: Your Perfect Summer Escape',
  description: 'Discover your hidden summer getaway at Beas View Pool Bara. Relaxed family atmosphere, affordable luxury, stunning river views & fun for all.',
  openGraph: {
    "title": "Beas View Pool Bara: Your Perfect Summer Escape",
    "description": "Discover your hidden summer getaway at Beas View Pool Bara. Relaxed family atmosphere, affordable luxury, stunning river views & fun for all.",
    "url": "https://www.beasviewpoolbara.com",
    "siteName": "Beas View Pool Bara",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/happy-daughter-resting-with-her-father-hammock_23-2147624087.jpg",
        "alt": "Beas View Pool Bara - Drone shot of river and pool at sunset"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Beas View Pool Bara: Your Perfect Summer Escape",
    "description": "Discover your hidden summer getaway at Beas View Pool Bara. Relaxed family atmosphere, affordable luxury, stunning river views & fun for all.",
    "images": [
      "http://img.b2bpic.net/free-photo/happy-daughter-resting-with-her-father-hammock_23-2147624087.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
