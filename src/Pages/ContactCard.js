import React from "react";
import {Link} from 'react-router-dom';
// import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  const mystyle = {
    marginTop:"100px",
    paddingLeft: "2.5rem",
    paddingRight: "2.5rem",
    // backgroundColor:"greenyellow",
  };
  return (
    <>
    <div className="item text-center" style={mystyle}>
      <div className="content">
        <Link to={{pathname:'/contact/${id}' , state:{contact:props.contact}}}>
        <div className="header">Name:{name}</div>
        <div>Email:{email}</div>
        </Link>
      </div>
      <i
        className="fas fa-trash"
        style={{marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
       <Link to={{pathname:'/edit}',props:{contact:props.contact}}}>
        <i
        className="ps-5 fas fa-edit"
        style={{marginTop: "7px" }}
      ></i>
      </Link>
    </div>
</>
  );
};

export default ContactCard;