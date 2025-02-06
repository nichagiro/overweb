import IntroPage from "@/containers/IntroPage";
import BuyBanner from "@/containers/BuyBanner";
import MultiFeature from "@/containers/MultiFeature";

import { Metadata } from "next";

const title = "Overweb | Diseño Grafico | Logotipos | Contenido de Fotos"
const description = "diseño grafico, imagenes bonitas, contenido de fotos, logotipos, imagen corporativa, diseño web, fotos en alta calidad, logos personalizados."
const url = "https://overweb.com.co/logos"
const images = "https://overweb.com.co/img/desing/02.png"

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

const features = [{
  title: "Diseño de tarjetas de presentación",
  body: "Las tarjetas de presentación abren puertas a negocios, dicen quién eres y que ofreces, un buen diseño despierta un interés en tus clientes para que puedan comprarte o recomendarte.",
  img: {
    src: "img/precios/logos/tarjetas-logo.webp",
    alt: "Logos y tarjetas de presentacion, overweb"
  }
}, {
  title: "Creación de marca",
  body: " Creamos tu imagen desde cero, espera tranquilo mientras que nuestros profesionales hacen todo el trabajo y elaboran el diseño a tu medida.",
  img: {
    src: "img/precios/logos/logo-work.webp",
    alt: "Desarrollo y diseños de logos, overweb"
  }
}]

export default function Logos() {
  return (
    <main>
      <IntroPage
        img={{
          src: "img/precios/logos/logo-fondo.webp",
          alt: "logos, tarjetas de presenctacion",
        }}
        strongTitle="Tarjetas de presentación"
        title="Logos, "
      />
      <MultiFeature
        body={<span>El <b>logo</b> es la primera presentación de una empresa ante los consumidores. Si se diseña bien, puede despertar el interés del público y darle ganas de descubrir más sobre la empresa; es por eso que debes elegir muy bien la imagen que te represente.</span>}
        items={features}
        title="Diseño de Logos"
      />
      <BuyBanner
        body="Su logo es único, es por eso que requiere unas funcionalidades a su medida, convierta su empresa en en una marca reconocida por solo:"
        img={{
          alt: "paginas tiendas virtuales",
          src: "img/precios/logos/logo-comprar.webp"
        }}
        price={"270.000"}
        title="¿Deseas crear tu imagen empresarial?"
        topic="Logos, Imagenes"
      />
    </main>
  )
}