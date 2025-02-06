import { ICardPricingProps } from "@/app/types"
import CardPricing from "@/components/CardPricing"
import { ReactNode } from "react"

interface Props {
  items: ICardPricingProps[]
  title: string | ReactNode
  subtitle: string | ReactNode
}

const PriceContainer = ({ items, title, subtitle }: Props) => {
  return (
    <section id="pricing" className="wow fadeInUp section-bg">
      <div className="container">
        <header className="section-header">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </header>
        <div className="row flex-items-xs-middle flex-items-xs-center">
          {
            items.map((item, index) => (
              <div className="col-xs-12 col-lg-4" key={index}>
                <CardPricing {...item} />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default PriceContainer