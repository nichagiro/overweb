import { ReactElement } from "react"

type Data = {
  title: string
  body: string | ReactElement
  img: {
    src: string
    alt: string
  }
}

interface Props {
  title: string
  body: string | ReactElement
  items: Data[]
}

const MultiFeature = ({ title, body, items }: Props) => {
  return (
    <section id="about">
      <div className="about-content text-center container">
        <h1>{title}</h1>
        <p className="text-justify text-sm-center">
          {body}
        </p>
        <div className="row mt-5">
          {
            items.map((item, index) => (
              <div className="d-flex flex-wrap" key={index}>
                {
                  index % 2 === 0 ? (
                    <>
                      <div className="col-md-6 wow slideInLeft">
                        <picture>
                          <img loading="lazy" src={item.img.src} className="img-fluid" alt={item.img.alt} />
                        </picture>
                      </div>
                      <div className="col-md-6 text-center text-sm-left d-flex align-items-center wow slideInRight">
                        <div>
                          <h2>{item.title}</h2>
                          <p className="text-justify">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    </>

                  ) : (
                    <div className="container row flex-column-reverse flex-md-row">
                      <div className="col-md-6 text-center text-sm-left mt-5 d-flex align-items-center wow slideInRight">
                        <div>
                          <h2>{item.title}</h2>
                          <p className="text-justify">
                            {item.body}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 wow slideInLeft">
                        <picture>
                          <img loading="lazy" src={item.img.src} className="img-fluid" alt={item.img.alt} />
                        </picture>
                      </div>
                    </div>
                  )
                }
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default MultiFeature