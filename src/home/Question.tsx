const Question = () => {
  return (
    <section id="faq">
      <div className="container">
        <header className="section-header">
          <h3>Preguntas Frecuentes</h3>
          <p>
            Entendemos que no todos los conceptos usted los conoce, es por eso que tenemos esta sección con las preguntas
            más habituales por nuestros clientes.
          </p>
        </header>
        <ul id="faq-list" className="wow fadeInUp">
          <li>
            <a data-toggle="collapse" href="#faq1" className="collapsed">
              ¿Que es un dominio y un hosting?
              <i className="fas fa-sort-down"></i>
            </a>
            <div id="faq1" className="collapse" data-parent="#faq-list">
              <p>
                Un <b>dominio</b> es aquel nombre que se le da a nuestra página web, por el cual los usuarios pueden acceder
                a ella <u>overweb.com.co</u> y el <b>hosting</b> es un espacio alquilado en el internet, el cual nos
                permite guardar nuestros archivos que hacen que nuestra página web funcione.
              </p>
            </div>
          </li>
          <li>
            <a data-toggle="collapse" href="#faq2" className="collapsed">
              ¿Cuantas veces debo pagar por mi página web?
              <i className="fas fa-sort-down"></i>
            </a>
            <div id="faq2" className="collapse" data-parent="#faq-list">
              <p>
                Con <b>Overweb</b> solo lo pagas 1 vez, lo que debes renovar anualmente es el hosting y el dominio
                para que tu sitio web siga visible y los usuarios puedan acceder a este facílmente.
              </p>
            </div>
          </li>
          <li>
            <a data-toggle="collapse" href="#faq3" className="collapsed">
              ¿Como puedo pagar por algúno de sus servicios?
              <i className="fas fa-sort-down"></i>
            </a>
            <div id="faq3" className="collapse" data-parent="#faq-list">
              <p>
                Puedes realizar la consignación por la compra de un servicio directamente en nuestra página web,
                también puedes hablar con uno de nuestros asesores por whatsapp, él te indicara por donde realizar
                la consignación  o el pago en efectivo.
              </p>
            </div>
          </li>
          <li>
            <a data-toggle="collapse" href="#faq4" className="collapsed">
              ¿Que aprenderia al tomar las capacitaciones con Overweb?
              <i className="fas fa-sort-down"></i>
            </a>
            <div id="faq4" className="collapse" data-parent="#faq-list">
              <p>
                Aprenderias a crear una página web desde 0, veras los fundamentos básicos de <b>HTML, CSS y JAVASCRIPT</b>
                y en temas mas avanzados aprenderas el lenguaje de programación <b>PHP y FRAMEWORKS</b> para trabajar con
                código mas facil y elegante.
              </p>
            </div>
          </li>
          <li>
            <a data-toggle="collapse" href="#faq5" className="collapsed">
              ¿Puedo trabajar con ustedes?
              <i className="fas fa-sort-down"></i>
            </a>
            <div id="faq5" className="collapse" data-parent="#faq-list">
              <p>
                Claro que si, debes informarnos y te explicamos que debes de hacer para generar ingresos con nosotros, te
                dariamos nuestros precios tipo <u>proveedor</u> para que revendas nuestros productos.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Question