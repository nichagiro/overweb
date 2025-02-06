import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/layouts/nav/Nav";
import Script from "next/script";
import Footer from "@/layouts/footer/Footer";
import { Metadata } from "next";
import WhatsappFloating from "@/components/WhatsappFloating";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const getSocials = {
  "@context": "http://schema.org",
  "@type": "Organization",
  "name": "Overweb",
  "url": "https://overweb.com.co/",
  "address": "Cra. 4b & Cl. 46 Bis",
  "sameAs": [
    "https://www.facebook.com/overweb28",
    "https://www.instagram.com/overweb28/",
    "https://twitter.com/Nicolas63783814",
    "https://www.linkedin.com/in/nicolas-chamorro-gir%C3%B3n-9aa594196/"
  ]
}

export const metadata: Metadata = {
  openGraph: {
    siteName: "Overweb",
    type: "website",
    countryName: "Colombia"
  },
  twitter: {
    site: "@Nicolas63783814",
    creator: "@Nicolas63783814",
    card: "summary",
  },
  authors: {
    name: "Nicolas Chamorro Giron",
    url: "https://nichagiro.github.io"
  },
  generator: "Next.js",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="es">
      <head>
        <link href="img/favicon.png" rel="icon" type="image/png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSocials) }} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} style={{ margin: 0 }}>
        <div id="preloader"></div>

        <Nav />
        {children}
        <Footer />

        <WhatsappFloating />

        <Script src="/js/jquery.min.js" />
        <Script src="/js/bootstrap.min.js" strategy="lazyOnload" />
        <Script src="/js/easing.min.js" strategy="lazyOnload" />
        <Script src="/js/mobile-nav.js" strategy="lazyOnload" />
        <Script src="/js/wow.min.js" strategy="beforeInteractive" />
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}


