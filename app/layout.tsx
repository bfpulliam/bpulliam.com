import type { Metadata } from "next";
import Script from "next/script";
import { profile } from "@/content/site";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/atkinson-hyperlegible/400.css";
import "@fontsource/atkinson-hyperlegible/700.css";
import "./globals.css";

const description = `${profile.name}, ${profile.role}. Fast, accessible websites and voice experiences.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://bpulliam.com"),
  title: `${profile.name} | ${profile.role}`,
  description,
  icons: { icon: "/icon.png" },
  openGraph: {
    title: profile.name,
    description,
    url: "https://bpulliam.com",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BX1V0BE679" strategy="afterInteractive" />
        <Script id="ga" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-BX1V0BE679');`}
        </Script>
      </body>
    </html>
  );
}
