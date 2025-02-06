import React from 'react'

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 d-flex align-items-center pt-md-5 pt-lg-0">
            <div className="about-img">
              <picture>
                <img loading="lazy" className="img-fluid" src="img/services-index.webp" alt="paginas web Wordpress" />
              </picture>
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="about-content">
              <h1 className="text-center text-sm-left">Overweb</h1>
              <h3>Mantenimiento de equipos de cómputo, Desarrollo de páginas web, Capacitaciones, Redes y Logos.</h3>
              <p>Estamos capacitados para brindarte soporte técnico en mantenimiento de computadoras, instalación de
                sistemas operativos, programas, somos especialistas en desarrollo y diseño de páginas web, aplicaciones
                empresariales y posicionamiento web, ayudamos a impulsar tu imagen, construimos tu logo empresarial,
                capacitamos a las personas que quieren conocer el paradigma de la programación con cursos de páginas web
                desde cero.
              </p>
            </div>
          </div>
          <div className="row w-100 icon-theme mt-sm-5">
            <div className="col-md-6 d-flex justify-content-md-center">
              <ul className="lista pl-3 p-sm-0 d-none d-sm-block">
                <li><i className="fas fa-check-circle"></i> Administración de redes.</li>
                <li><i className="fas fa-check-circle"></i> Páginas web super rápidas.</li>
                <li><i className="fas fa-check-circle"></i> Cursos de diseño web.</li>
                <li><i className="fas fa-check-circle"></i> Logos únicos y originales.</li>
                <li><i className="fas fa-check-circle"></i> Imágenes publicitarias en alta definición.</li>
              </ul>
            </div>
            <div className="col-md-6 d-flex justify-content-md-center">
              <ul className="lista pl-3 p-sm-0 d-none d-sm-block">
                <li><i className="fas fa-check-circle"></i> Sistemas de información empresarial.</li>
                <li><i className="fas fa-check-circle"></i> Hosting y dominios.</li>
                <li><i className="fas fa-check-circle"></i> Optimización de computo.</li>
                <li><i className="fas fa-check-circle"></i> Tiendas virtuales.</li>
                <li><i className="fas fa-check-circle"></i> Orientación y asesorias.</li>
              </ul>
            </div>
          </div>
          <div className="col d-sm-none">
            <ul className="lista pl-0 icon-theme">
              <li><i className="fas fa-check-circle"></i> Administración de redes.</li>
              <li><i className="fas fa-check-circle"></i> Páginas web super rápidas.</li>
              <li><i className="fas fa-check-circle"></i> Cursos de diseño web.</li>
              <li><i className="fas fa-check-circle"></i> Logos únicos y originales.</li>
              <li><i className="fas fa-check-circle"></i> Imágenes publicitarias.</li>
              <li><i className="fas fa-check-circle"></i> Sistemas empresariales.</li>
              <li><i className="fas fa-check-circle"></i> Hosting y dominios.</li>
              <li><i className="fas fa-check-circle"></i> Optimización de computo.</li>
              <li><i className="fas fa-check-circle"></i> Tiendas virtuales.</li>
              <li><i className="fas fa-check-circle"></i> Orientación y asesorias.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About