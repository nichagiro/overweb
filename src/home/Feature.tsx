const Feature = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row feature-item">
          <div className="col-lg-6 wow fadeInUp">
            <picture>
              <img loading="lazy" src="img/social.webp" className="img-fluid" alt="instalacion de Windows" />
            </picture>
          </div>
          <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
            <h4 className="text-theme-2 font-weight-bolder">Navega tranquilo y confia en nosotros.</h4>
            <p>
              No hay nada mas tranquilo que trabajar o navegar con las herramientas adecuadas y en buen estado. despreocupate de
              problemas de pantalla, CPU, procesadores, RAM, licencias, falta de programas y velocidad; nuestro trabajo hace que
              te diviertas en la web mientras arreglamos todos estos factores por ti.
            </p>
            <p>
              Disfruta de tu nueva página sin limite algúno, velocidad perfecta e ideal para tus usuarios. obten el dominio para tu
              sitio web y un hosting para que almacenes tu negocio virtual.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature