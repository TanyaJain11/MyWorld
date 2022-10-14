import React from 'react';
import Nav from "./Nav.js";
import Contact from "./Contact";

class Edit extends React.Component{
    constructor(props){
        
        super(props);
        const {id,name,email} = props.contact;
        this.state={
            id,
            name,
            email,
        }
    }

    update=(e)=>{
        e.preventDefault();
        if(this.state.name=="" && this.state.email==""){
            alert("All fields mandatory!");
            return;
        }
        this.props.updateContactHandler(this.state);
       this.setState({ name: "", email: "" });
        this.props.history.push("/");
        console.log(this.state);
    }
    render(){
    return(
        <>
        <Nav/>
        <div class="conatiner" style={{marginTop:"105px"}}>
        <div class="text-center">
            <h3 class="text-primary">How Can We Help You?</h3>
            <p class="lead">Lorem ipsum, dolor sit amet consectetur adipisic</p>
        </div>
        <form onSubmit={this.update}>
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
                    <button class="btn btn-primary">
                        Submit Form
                    </button>
                </div>
            </div>
        </div>
        </form>
    </div>
    <div>
    <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              width="200"
              height="250"
              frameBorder="0"
              style={{ border: "0",marginLeft:"200px" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
        </div>
    </>



    );
}
}

export default  Edit;