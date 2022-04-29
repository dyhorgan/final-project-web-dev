import React, {useState, useCallback} from "react"
import creature from "../pictures/creature.png"
import {Link} from "react-router-dom"
import {setQuery} from "../actions/movie-actions.js"
import {useDispatch, useSelector} from "react-redux";

const NavBar = () => {

  const state = useSelector((state) => {
          return state.profileReducer;
      });

  let dispatch = useDispatch();
  const [query, setNewQuery] = useState("");

  const updateSearchQuery = (event) => {
     let theQuery = event.target.value;
     setNewQuery(theQuery)
  }

  const set = useCallback(() => {setQuery(dispatch, query)},[dispatch, query])

  let {username} = state;


  return (<nav className="navbar navbar-expand-lg navbar-light bg-light">

            <Link to="/home">
                <img src={creature} alt="" height="150em" width="100%"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active ms-5">
                  <Link className="nav-link" to="/home"><h5>Home</h5></Link>
                </li>
                <li className="nav-item ms-5">
                  <Link className="nav-link" to="/login"><h5>Login</h5></Link>
                </li>
                <li className="nav-item dropdown ms-5">
                  <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   Subgenres
                  </div>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/subgenre/zombie">Zombie</Link>
                    <Link className="dropdown-item" to="/subgenre/vampire">Vampire</Link>
                    <Link className="dropdown-item" to="/subgenre/werewolf">Werewolf</Link>
                    <Link className="dropdown-item" to="/subgenre/aliens">Aliens</Link>
                    <Link className="dropdown-item" to="/subgenre/monster">Giant Monster</Link>
                    <Link className="dropdown-item" to="/subgenre/slasher">Slasher</Link>
                    <Link className="dropdown-item" to="/subgenre/psycho">Psychological</Link>
                    <Link className="dropdown-item" to="/subgenre/comedic">Comedic</Link>
                    <Link className="dropdown-item" to="/subgenre/paranormal">Paranormal</Link>
                  </div>
                </li>

              <form className="form-inline my-2 my-lg-0 ms-5">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={updateSearchQuery} />
                <Link to="/search">
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={set}>Search</button>
                </Link>
              </form>
              {username.length > 0 ?
              <li className="nav-item ms-5">
                <Link className="nav-link" to="/profile">
                <h5>profile</h5>
                </Link>
              </li> : <div />
              }
              {username.length > 0 ? <li className="nav-item ms-5">
                                                     <Link className="nav-link" to="/people-to-follow">
                                                     <h5>People to Follow</h5>
                                                     </Link>
                                                   </li> : <div />}
              </ul>

            </div>
          </nav>)
}

export default NavBar
