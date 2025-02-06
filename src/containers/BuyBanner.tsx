interface Props {
  topic: string
  title: string
  body: string
  price: string | number
  img: {
    src: string
    alt: string
  }
}

const BuyBanner = ({ title, body, price, img, topic }: Props) => {
  return (
    <div className="container-fluid my-5 shadow-lg wow fadeInUp">
      <div className="row text-white flex-column-reverse flex-lg-row">
        <div className="col-12 col-lg-6 p-4 p-sm-5 p-md-5 text- text-md-left" style={{ backgroundColor: "#413e66" }}>
          <div className="p-md-2">
            <h3 className="text-uppercase">{title}</h3>
            <div>
              <p style={{ fontSize: "1.5rem" }}>
                {body}
              </p>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-12 d-flex justify-content-center justify-content-md-end justify-content-lg-start ">
                  <b className="precio">
                    <span className="signo-peso">$</span>{price}<span className="cop">/cop</span></b>
                </div>
                <div className="col-12 col-md-6 col-lg-12 pt-2 pt-sm-0 d-flex justify-content-center justify-content-md-start align-items-center">
                  <a
                    target="_blank"
                    href={`https://wa.me/+573174865702?text=Buen%20dia,%20estoy%20interesado%20en%20${topic}`}
                    className="btn bg-theme text-white w-50 py-2"
                  >
                    <i className="fab fa-whatsapp"></i> Cotizar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 d-flex align-items-center">
          <picture>
            <img className="img-fluid" src={img.src} alt={img.alt} />
          </picture>
        </div>
      </div>
    </div >
  )
}

export default BuyBanner