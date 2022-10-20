import React from 'react';
import Nav from "./Nav.js";
import {Link} from 'react-router-dom'

class Contact extends React.Component{
    state ={
        name:"",
        email:"",
    }

    add=(e)=>{
        e.preventDefault();
        if(this.state.name=="" && this.state.email==""){
            alert("All fields mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
       this.setState({ name: "", email: "" });
        console.log(this.state);
    }
    render(){
    return(
        <>
        <Nav/>
        <div class="conatiner" style={{marginTop:"105px"}}>
        <div class="text-center">
            <h3 class="text-primary">How Can We Help You?</h3><br/>
            <p class="lead">Lorem ipsum, dolor sit amet consectetur adipisic</p>
        </div>
        
        <form onSubmit={this.add}>
        <div class=" d-flex align-items-center justify-content-center">
            <div class="bg-white col-md-4">
                <div class="p-4 rounded shadow-md">
                    <div>
                        <label for="name" class="form-label">Your Name</label>
                        <input type="text" name="name" class="form-control" placeholder="Your Name"  value={this.state.name} onChange={(e)=> this.setState({name:e.target.value})} />
                    </div>
                    <div class="mt-3">
                        <label for="email" class="form-label">Your Email</label>
                        <input type="text" name="email" class="form-control" placeholder="Your Email"  value={this.state.email} onChange={(e)=> this.setState({email:e.target.value})}/>
                    </div>
                    {/* <div class="mt-3">
                        <label for="subject" class="form-label">Subject</label>
                        <input type="text" name="subject" class="form-control" placeholder="Subject" />
                    </div> */}
                    <div class="mt-3 mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea name="message" cols="20" rows="1" class="form-control"
                            placeholder="message"></textarea>
                    </div>
                    <div class="mt-3 text-center mb-3">
                    <button class="btn btn-primary">
                        {/* Upload image */}
                        <Link to="/upload" className="nav-link active" aria-current="page">Upload Image</Link>
                    </button>
                    </div>
                    <button class="btn btn-primary">
                        Submit Form
                    </button>
                    
                </div>
            </div>
        </div>
       
        </form>
        <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13748.70053725945!2d76.65467147652654!3d30.516086499999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1665646082598!5m2!1sen!2sin"
              width="100"
              height="100"
              frameBorder="0"
              style={{ border: "0",marginLeft:"200px",
              marginBottom: "20px",
              width: "200px",
              marginLeft: "966px",}}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
    </div>
   
    </>



    );
}
}

export default Contact;