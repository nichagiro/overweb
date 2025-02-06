const Footer = () => {
  return (
    <footer id="footer" className="section-bg">
      <div className="container">
        <div className="social-links text-center">
          <a target="_blank" href={process.env.NEXT_PUBLIC_FACEBOOK_URL}><i className="fab fa-facebook-f"></i></a>
          <a target="_blank" href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}><i className="fab fa-instagram"></i></a>
        </div>
        <div className="copyright">
          &copy; Copyright <strong>Overweb</strong>. Todos los derechos reservados
        </div>
        <div className="credits">
          Diseñado por <a href="https://nichagiro.github.io/">Nicolas Chamorro</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer