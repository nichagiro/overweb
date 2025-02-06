import { ICardPricingProps } from "@/app/types"
import PriceContainer from "@/containers/PriceContainer"

const data: ICardPricingProps[] = [{
  title: "Mantenimiento PC",
  pricing: "80.000",
  items: [
    "Limpieza de virus",
    "Optimización del sistema",
    "Actualización de software",
    "Reparación de hardware",
    "Microsoft Office",
    "Mejora de rendimiento"
  ]
}, {
  title: "Páginas web",
  pricing: "800.000",
  items: [
    "Diseño web",
    "Desarrollo web",
    "Dominio y hosting",
    "SEO",
    "Responsive Design",
    "Redes Sociales"
  ]
}, {
  title: "Tienda Virtual",
  pricing: "3.5 M",
  items: [
    "Diseño de pasarela",
    "Medios de pago",
    "Sistema de inventario",
    "SEO",
    "Ecommerce",
    "Dashboard Administrativo"
  ]
}]

const Pricing = () => {
  return (
    <PriceContainer
      items={data}
      subtitle="Competimos por calidad."
      title="Precios"
    />
  )
}

export default Pricing