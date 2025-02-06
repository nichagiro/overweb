interface Props {
  title: string;
  strongTitle: string;
  img: {
    src: string;
    alt: string;
  }
}

const IntroPage = ({ img, strongTitle, title }: Props) => {
  return (
    <section id="intro" className="clearfix">
      <div className="container d-flex h-100">
        <div className="row justify-content-center align-self-center">
          <div className="col-md-5 intro-info order-md-first order-last">
            <h2>{title} <span> {strongTitle}</span></h2>
            <div>
              <a href="#about" className="btn-get-started scrollto">Empecemos</a>
            </div>
          </div>
          <div className="col-md-7 intro-img order-md-last order-first">
            <picture>
              <img src={img.src} alt={img.alt} className="img-fluid" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroPage