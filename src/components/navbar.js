import React from "react"
import creature from "../pictures/creature.png"
import {Link} from "react-router-dom"

const NavBar = () => {
  return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={creature} alt="" width="10%"/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/">Action</Link>
                    <Link className="dropdown-item" to="/">Another action</Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="nav-link disabled" to="/">Disabled</Link>
                </li>

              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                profile
                </Link>
              </li>
              </ul>
            </div>
          </nav>)
}

export default NavBar
