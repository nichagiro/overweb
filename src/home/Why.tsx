const Why = () => {
  return (
    <section id="why-us" className="wow fadeIn">
      <div className="container-fluid">
        <header className="section-header">
          <h3>¿Porque elegirnos?</h3>
          <p>
            En la actualidad hay muchas empresas que se dedican a muchos servicios digitales, pero lo que nos diferencia
            a nosotros de ellas son:
          </p>
        </header>
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
            <picture>
              <img loading="lazy" src="img/empresa-mela.webp" alt="Mantenimiento de computadores en cali" className="img-fluid" />
            </picture>
          </div>
          <div className="col-lg-6 d-flex align-items-center text-justify px-lg-5">
            <div>
              <div className="features wow bounceInUp clearfix">
                <div className="d-flex w-100">
                  <i className="fas fa-code fa-2x text-theme d-none d-md-block"></i>
                  <h4 className="text-center text-sm-left text-theme-2 pl-md-2">páginas seguras y rápidas </h4>
                </div>
                <p>
                  Nuestras páginas web son elaboradas con código de programación, lo que no implica usar algún tipo
                  de herramienta externa para crear páginas web sin conocimiento previo, como lo es Wordpress; esto hace que no
                  dependamos de software de tercero y asi poder tener una mayor seguridad, ademas por ser elaborado con código
                  nuestra página es muy liviana conforme al peso, lo que la hace este super rapida en comparacion a páginas elaboradas
                  con CMS.
                </p>
              </div>
              <div className="features wow bounceInUp clearfix">
                <div className="d-flex">
                  <i className="fas fa-tools text-theme fa-2x d-none d-md-block"></i>
                  <h4 className="text-center text-sm-left text-theme-2 pl-md-2">Mantenimiento de calidad</h4>
                </div>
                <p>
                  Si eres de los que te dicen que tu computador es lento o tiene virus y por eso necesita un formateo; dejame decirte que
                  no es asi, todo tiene un problema de raiz y una optimización para cada factor, conserva tus datos personales con
                  nosotros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why