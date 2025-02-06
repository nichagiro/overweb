"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Nav = () => {
  const path = usePathname()
  
  return (
    <header id="header" className="">
      <div className="container">
        <div className="logo float-left">
          <picture>
            <img
              src="img/logo.webp"
              alt="Logo de OverWeb, agencia de desarrollo web y diseño digital"
              width={158}
              height={64}
            />
          </picture>
        </div>
        <nav className="main-nav float-right d-none d-lg-block">
          <ul>
            <li className={path == "/" ? "active" : ""}><Link href="/">Inicio</Link></li>
            <li className={path == "/paginas" ? "active" : ""}><Link href="/paginas">Páginas</Link></li>
            <li className={path == "/tiendavirtual" ? "active" : ""}><Link href="/tiendavirtual">tienda Virtual</Link></li>
            <li className={path == "/logos" ? "active" : ""}><Link href="/logos">logos</Link></li>
            <li className={path == "/capacitaciones" ? "active" : ""}><Link href="/capacitaciones">capacitaciones</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Nav