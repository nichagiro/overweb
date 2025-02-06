import { ICardPricingProps } from "@/app/types"

const CardPricing = ({ items, pricing, title, whatsapp }: ICardPricingProps) => {
  return (
    <div className="card shadow">
      <div className="card-header">
        <h3><span className="currency">$</span>{pricing}<span className="period">/cop</span></h3>
      </div>
      <div className="card-block px-3">
        <h4 className="card-title text-center">
          {title}
        </h4>
        {
          whatsapp &&
          <div className="w-100 text-center my-4">
            <a target="_blank" href={`https://wa.me/+573174865702?text=Me%20interesa%20${title}`} className="btn">
              <i className="fab fa-whatsapp"></i> Comprar
            </a>
          </div>
        }
        <ul className="list-group text-sm-center text-lg-left">
          {
            items.map((item, index) => (
              <li key={index} className="list-group-item"><i className="fas fa-check-circle mr-1"></i>{item}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default CardPricing