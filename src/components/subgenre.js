import React, {useEffect} from "react"
import {getMoviesArray, getMoviePosters} from "../actions/movie-actions.js"
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import NavBar from "./navbar.js"


const Subgenre = (props) => {
  const state = useSelector((state) => {
          return state.movieReducer;
        });

  const dispatch = useDispatch();

  useEffect(() => {getMoviesArray(dispatch, filmObj[props.genre])},[dispatch, filmObj[props.genre]]);
  useEffect(() => {getMoviePosters(dispatch, filmObj[props.genre])},[dispatch, filmObj[props.genre]]);
  console.log("movie state in subgenre component");
  console.log(state);
  let key = 0;
  let index = -1;
  return (<div>
          <NavBar />
      <div className="m-5">
    <h1>{props.genre} movies</h1>
    <div className="flexWrap">
    {state.movies.map((movie) => {
    key += 1;
    index += 1;
    return (
    <div className="card"  style={{width: "28rem"}} key={key}>
      <Link to={"/details/" + movie.id}>
      <img className="card-img-top" width="100px" src={"https://image.tmdb.org/t/p/original/" + state.posters[index]} alt="Card image cap"/>
      </Link>
      <div className="card-body center">
        <h3 className="card-text">{movie.original_title}</h3>
      </div>
    </div>
    )})}
    </div>
    </div>
    </div>
  )
}

const filmObj = {
  zombie: [ 923,
           	 1694,
           	 170,
           	747,
           	 764,
           	 10331,
           	23963,
           	8329,
           	177221,
           	396535,
           	19908,
           	763],
  vampire: [653,
            	13310,
            	6114,
            	11879,
            	36647,
            	152603,
            	11797,
            	10873,
            	34996,
            	755,
            	1547,
            	11655],
  werewolf: [11880,
             	 11905,
             	11298,
             	814,
             	13666,
             	9871,
             	6312,
             	17898,
             	800497,
             	652004,
             	10395,
              10725],
  alien: [1091,
           	348,
           	11850,
           300668,
           	447332,
           	106,
           	59678,
           	2787,
           	2675,
           	3035,
           	97370,
           	9426],
  monster: [124905,
            	244,
            	7191,
            	339967,
            	1255,
            	11071,
            	68726,
            	43933,
            	9362,
            	329,
            	9599,
            	37686],
  slasher: [948,
            	377,
            	30497,
            	20126,
            	4232,
            	4488,
            	39874,
            	760104,
            	103620,
            	440021,
            	16938,
            	1359],
  psychological: [694,
           	503919,
           	530385,
           	419430,
           	399057,
           	74725,
           	44214,
           	10972,
           	2291,
           	931,
           	270303,
           	242224],
  comedic: [766,
            	246741,
            	927,
            	46838,
            	3034,
            	4011,
            	620,
            	11974,
            	22970,
            	10776,
            	567609,
            	109414],
  paranormal: [9552,
               	49018,
               	138843,
               	565,
               	805,
               	609,
               	794,
               	11906,
               	310131,
               	2667,
               	1433,
               	9529]
}

export default Subgenre
