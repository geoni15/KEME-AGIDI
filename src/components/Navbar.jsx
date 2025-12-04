import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import icono from '../assets/icono.svg'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-white fixed-top">
      <div className="container">
        <img src="./src/assets/icono.svg" alt="" srcset="" className="navbar-brand" style={{width: "40px"}}/>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#home">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Acerca de
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contacto
              </a>
            </li>
          </ul>
        </div>
         <style>{` .nav-link { color: black; } `}</style>
      </div>
    </nav>
  )
}
