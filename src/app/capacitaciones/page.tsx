import IntroPage from "@/containers/IntroPage";
import BuyBanner from "@/containers/BuyBanner";
import MultiFeature from "@/containers/MultiFeature";

import { Metadata } from "next";

const title = "Overweb | Capacitaciones | Clases Virtuales | Laravel y Livewire | React"
const description = "Capacitaciones y clases de diseño web, clases virtuales de programacion, capacitacion en laravel, curso de react, curso de css y js, capacitacion wordpress."
const url = "https://overweb.com.co/capacitaciones"
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
  title: "Diseño web",
  body: <span>Aprende a crear interfaces  de usuario y diseña las páginas de manera dinámica e interactiva, aprende a controlar todos los eventos del navegador cada vez que un usuario ejecute un comando en tu página. Empezaremos con lo esencial para lograr todo esto. <b>HTML, CSS y JS</b></span>,
  img: {
    src: "img/precios/curso/basic-curso.webp",
    alt: "Aprende css, js y html"
  }
}, {
  title: "Programas y software profesional",
  body: "Adquiere el conocimiento para crear soluciones y herramientas web, aprenderás a usar los algoritmos para elaborar funciones específicas de programas que necesites desarrollar, crea programas para pequeñas, medianas y grandes empresas.",
  img: {
    src: "img/precios/curso/curso-laravel.webp",
    alt: "Estudia desarrollo web con overweb"
  }
}, {
  title: "Desarrollo en wordpress",
  body: " Usa una de las herramientas de diseño web más populares en el mercado. Crea páginas web con plantillas y funcionalidades ya programadas; empieza a elaborar páginas sencillas y profesionales, blogs, portafolios e incluso tiendas virtuales.",
  img: {
    src: "img/precios/curso/curso-wordpress.webp",
    alt: "desarrollo de paginas web con wordpress, overweb"
  }
}]

export default function CapacitacionesPage() {
  return (
    <main>
      <IntroPage
        img={{
          src: "img/precios/curso/fondo-curso.webp",
          alt: "Capacitaciones - desarrollo web, overweb",
        }}
        strongTitle="Overweb!"
        title="Capacitaciones web"
      />
      <MultiFeature
        body="Las aplicaciones web cambiaron para siempre nuestra realidad. Hoy en día el conocimiento y entendimiento de programación es una de las habilidades más valoradas en cualquier ámbito profesional, Aprende los fundamentos de la programación, la habilidad más demandada y expande tus oportunidades de negocio y crecimiento profesional"
        items={features}
        title="Clases de programación web"
      />
      <BuyBanner
        img={{
          src: "img/precios/curso/profesor-cursos.webp",
          alt: "Cursos virtuales de programacion con overweb"
        }}
        body="El aprendizaje es una herramienta de negocio y crecimiento integral, aprenda con nosotros el estudio necesario y fortalezca su perfil profesional."
        price={"35.000"}
        title="¿Deseas tomar las capacitaciones?"
        topic="Capacitaciones"
      />
    </main>
  )
} 