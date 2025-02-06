import IntroPage from "@/containers/IntroPage";
import PriceContainer from "@/containers/PriceContainer";

import { Metadata } from "next";
import { itemsPriceContainer } from "./data";

const title = "Overweb | Paginas web | Paginas web creativas | Crear pagina web"
const description = "Overweb diseño de paginas web, paginas web creativas, creamos su pagina web tal cual a su necesidad, paginas sencillas y dinamicas, tiendas virtuales, etc."
const url = "https://overweb.com.co/paginas"
const images = "https://overweb.com.co/img/desing/08.png"

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

export default function WebPages() {
  return (
    <main className="mb-5">
      <IntroPage
        img={{
          src: "img/precios/paginas.webp",
          alt: "paginas web, desarrollo y diseño web"
        }}
        title="Páginas web creativas"
        strongTitle="Overweb!"
      />
      <div id="about" style={{ padding: "0px" }}>
        <PriceContainer
          items={itemsPriceContainer}
          subtitle=" Escoge el plan que más se adapte a tus requerimientos y necesidades, esta es tu oportunidad de darte a conocer al mundo y empezar a generar nuevos clientes. Estando en la web tu visibilidad va aumentar, lo que posiblemente mejorara tus oportunidades de ingresos."
          title="Desarrollamos tu sitio web"
        />
      </div>
    </main>
  )
}