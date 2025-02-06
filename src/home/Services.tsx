const Services = () => {
  return (
    <section id="services" className="section-bg">
      <div className="container">
        <header className="section-header">
          <h3>Servicios</h3>
          <p>
            Overweb es una empresa que brinda soporte y crecimiento empresarial, dejanos mostrarte algúnos de nuestros
            servicios.
          </p>
        </header>
        <div className="row text">
          <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="fas fa-laptop text-primary"></i></div>
              <h4 className="title"><a href="">Mantenimiento de cómputo</a></h4>
              <p className="description">
                instalación de sistemas operativos como Windows y linux, Mantenimiento al CPU, instalaciónes de complementos
                y mejoras para el equipo.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="fab fa-sketch text-warning"></i></div>
              <h4 className="title"><a href="">Diseño web</a></h4>
              <p className="description">
                Creamos la página web ideal para tu negocio, super rapida, adaptable a cualquier pantalla y con un excelente
                diseño atractivo para tus clientes.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="fas fa-graduation-cap text-success"></i></div>
              <h4 className="title"><a href="">Capacitaciones</a></h4>
              <p className="description">
                Capacitate con nosotros y aprende a desarrollar tus propias páginas web desde 0, Aprende lo básico
                hasta lo más avanzado.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="fas fa-images text-danger"></i></div>
              <h4 className="title"><a href="">Gestion de multimedia</a></h4>
              <p className="description">
                Imágenes llamativas y temáticas para tus actividades y negocios, llama toda la atención de tus usuarios y
                clientes con publicaciones en alta definición.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="fas fa-info-circle text-info"></i></div>
              <h4 className="title"><a href="">Sistemas de información</a></h4>
              <p className="description">
                Desarrollo y análisis de software empresarial y administrativo, Creamos la herramienta virtual necesaria para
                que administres tu negocio.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
            <div className="box">
              <div className="icon"><i className="fab fa-ubuntu text-theme"></i></div>
              <h4 className="title"><a href="">Logos</a></h4>
              <p className="description">
                Diseñamos la imagen de tu empresa; una marca única y original, utilizando buenas metodologías, aplicando el
                arte y el diseño; muestrate a tus clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>)
}

export default Services