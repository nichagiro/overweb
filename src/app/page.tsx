import IntroPage from "@/containers/IntroPage";
import About from "@/home/About";
import Feature from "@/home/Feature";
import Pricing from "@/home/Pricing";
import Question from "@/home/Question";
import Services from "@/home/Services";
import Why from "@/home/Why";
import { Metadata } from "next";

const title = "Overweb | Paginas Web | Tiendas Virtuales | Capacitaciones | Logos"
const description = "paginas web, tiendas virtuales, capacitaciones, logotipo, mantenimiento de computadores, ecommerce, software personalizado, instalacion windows."
const url = "https://overweb.com.co"
const images = "https://overweb.com.co/img/desing/01.png"

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title, description, url, images,
  },
  twitter: {
    title, description, images,
  },
  alternates: {
    canonical: url,
  },
};

export default function Home() {
  return (
    <main>
      <IntroPage
        strongTitle="web!"
        title="Rápidas soluciones"
        img={{
          src: "img/intro-img.webp",
          alt: "diseño de paginas web",
        }}
      />
      <About />
      <Services />
      <Why />
      <Feature />
      <Pricing />
      <Question />
    </main>
  );
}
