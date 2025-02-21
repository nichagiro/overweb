import IntroPage from "@/containers/IntroPage";
import BuyBanner from "@/containers/BuyBanner";
import MultiFeature from "@/containers/MultiFeature";
import { Metadata } from "next";

const title = "Overweb | Tiendas Virtuales | Ecoomerce | Diseño de tiendas virtuales"
const description = "Overweb diseño de tiendas virtuales, convertimos su negocio en comercio electronico, venda de manera automatica a sus clientes en linea, ecommerce."
const url = "https://overweb.com.co/tienda-virtual"
const images = "https://overweb.com.co/img/desing/09.png"

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
  title: "Gestion Administrativa",
  body: "Le entregamos su tienda virtual diseñada a su medida, le enseñamos a crear nuevos ítems con la información requerida del producto, en general se le brindara una capacitación para que pueda administrar la página web hacia el enfoque comercial.",
  img: {
    src: "img/precios/tiendavirtual/tienda-virtual.webp",
    alt: "desarrollo de tiendas virtuales overweb"
  }
}, {
  title: "Diseño atractivo y profesional",
  body: "Su tienda virtual se verá perfectamente en cualquier dispositivo que este mostrando la página web (tabletas, computadores, televisores, celulares, etc.) tendrá un diseño único y  una sincronía de colores acorde a la temática de la empresa.",
  img: {
    src: "img/precios/tiendavirtual/oficina-diseño.webp",
    alt: "Diseño de pasarelas y ecommerce"
  }
}, {
  title: "Medios de pago",
  body: "Extienda su negocio y llévelo a la web, venda en línea su catálogo de productos físicos o virtuales; reciba sus ingresos por ventas online con múltiples métodos de pago; Realizamos el diseño de tiendas virtuales para todo tipo de negocio.",
  img: {
    src: "img/precios/tiendavirtual/dinero.webp",
    alt: "pagos virtuales y faciles para tu ecommerce, overweb"
  }
}]

export default function TiendaVirtual() {
  return (
    <main>
      <IntroPage
        img={{
          src: "img/precios/tiendavirtual/tienda-fondo.webp",
          alt: "tiendas virtuales, Ecommerce, desarrollo de ecoomerce, overweb",
        }}
        strongTitle="Ecommerce"
        title="Tiendas Virtuales, "
      />
      <MultiFeature
        body=" Extienda su negocio y llévelo a la web, venda en línea su catálogo de productos físicos o virtuales; reciba sus ingresos por ventas online con múltiples métodos de pago."
        items={features}
        title="Tiendas virtuales, Ecoomerce"
      />
      <BuyBanner
        body=" Su proyecto es único, es por eso que requiere unas funcionalidades a su medida, convierta su tienda en realidad por solo:"
        img={{
          alt: "paginas tiendas virtuales, Ecoomerce, desarrollo de tiendas virtuales",
          src: "img/precios/logos/logo-comprar.webp"
        }}
        price={"3.500.000"}
        title="¿Deseas crear tu tienda virtual?"
        topic="Tienda Virtual"
      />
    </main>
  )
}