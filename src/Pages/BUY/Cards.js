import { CardActions } from '@material-ui/core';
import React from 'react';
import Nav from "../Nav.js";
import Sidebar from './Sidebar.js';

const Cards=(props)=>{
   return(
    <>
    {/* <Sidebar/> */}
    {/* <Nav/> */}
    <div className="card" style={{ display:"inline-block" , border: "0",marginLeft:"40px",height:"21rem",
              marginBottom: "20px",
              width: "18rem",
              marginTop: "100px",}}>
  <img src={props.image} className="card-img-top" alt="..." style={{height:"222px"}}/>
  <div className="card-body">
    <h5 className="card-title text-center text-dark">{props.name}</h5>
    <p className="mt-3">
    <span className='text-dark'>Rs. 399</span>
      <span><i class="far fa-heart text-danger fs-5 float-end"></i></span>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    </p>
  </div>
    </div>
    </>
   )
}

export default Cards;