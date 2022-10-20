import { CardActions } from '@material-ui/core';
import React from 'react';
import Card from "./Cards.js";
import Sidebar from './Sidebar.js';
import ByName from './ByName';

const Buy=()=>{
   return(
    // <Card>
    <div style={{overflowX:"hidden"}}>
    <Sidebar />
    <ByName/>
    {/* <Nav/> */}
    {/* <div className="card" style={{ border: "0",marginLeft:"200px",height:"21rem",
              marginBottom: "20px",
              width: "18rem",
              marginTop: "100px",}}>
  <img src="../assets/images/Vastu.webp" className="card-img-top" alt="..." style={{height:"150px"}}/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
    </div> */}
    </div>
    
   )
}

export default Buy;