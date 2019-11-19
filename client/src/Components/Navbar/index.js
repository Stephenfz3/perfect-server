import React from './node_modules/react'

import './navbar.css'



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="index">Perfect Server</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-right" id="navbarNavDropdown">
              <div className="space-filler"></div>
              <ul className="navbar-nav">
                  <li className="nav-item ">
                      <a className="nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item ">
                      <a className="nav-link active" href="register">About us</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link active" href="/login">Login <span className="sr-only"></span></a>
                  </li>
                  
              </ul>
          </div>
      </nav>
    )
}

export default Navbar