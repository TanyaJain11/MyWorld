import React from "react";
import Nav from './Nav';

const Login=()=>{
    const mystyle = {
        paddingLeft: "2.5rem",
        paddingRight: "2.5rem",
        backgroundColor:"greenyellow"
      };

    const footerStyle={
        marginTop:"30px",
         backgroundColor:"greenyellow"
    }
    return(
        <>
        {/* <p1>hellli</p1>
       <div classNameName="container-fluid vh-100" style={{margintop:"300px"}}>
            <div classNameName="" style={{margintop:"200px"}}>
                <div classNameName="rounded d-flex justify-content-center">
                    <div classNameName="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
                        <div classNameName="text-center">
                            <h3 classNameName="text-primary">Sign In</h3>
                        </div>
                        <form action="">
                            <div classNameName="p-4">
                                <div classNameName="input-group mb-3">
                                    <span classNameName="input-group-text bg-primary"><i
                                            classNameName="bi bi-person-plus-fill text-white"></i></span>
                                    <input type="text" classNameName="form-control" placeholder="Username" />
                                </div>
                                <div classNameName="input-group mb-3">
                                    <span classNameName="input-group-text bg-primary"><i
                                            classNameName="bi bi-key-fill text-white"></i></span>
                                    <input type="password" classNameName="form-control" placeholder="password" />
                                </div>
                                <div classNameName="form-check">
                                    <input classNameName="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label classNameName="form-check-label" for="flexCheckDefault">
                                        Remember Me
                                    </label>
                                </div>
                                <button classNameName="btn btn-primary text-center mt-2" type="submit">
                                    Login
                                </button>
                                <p classNameName="text-center mt-5">Don't have an account?
                                    <span classNameName="text-primary">Sign Up</span>
                                </p>
                                <p classNameName="text-center text-primary">Forgot your password?</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> */}
        <Nav/>

<section className="vh-100" style={{paddingTop:"105px"}}>
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="/assets/images/Name/loggin.png"
          className="img-fluid" alt="Sample" />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          {/* <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="fab fa-linkedin-in"></i>
            </button>
          </div> */}

          {/* <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div> */}
          <div className="form-outline mb-4">
            <input type="text" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter your Name" />
            <label className="form-label" for="form3Example3">Name</label>
          </div>


          
          <div className="form-outline mb-4">
            <input type="email" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label className="form-label" for="form3Example3">Email address</label>
          </div>

        
          <div className="form-outline mb-3">
            <input type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password" />
            <label className="form-label" for="form3Example4">Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
           
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-lg"
              style={mystyle}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                className="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div
    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5" style={footerStyle}>
   
    <div className="text-white mb-3 mb-md-0">
      Copyright © 2022. All rights reserved.
    </div>
    

    <div>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-google"></i>
      </a>
      <a href="#!" className="text-white">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  </div>
</section>

        </>
    )
}

export default Login;




// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import { useNavigate, Link } from "react-router-dom";
// import axiox from "axios";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "45ch",
//     },
//   },
// }));

// const Login = ({ setLogoutUser }) => {
//   const classes = useStyles();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   let history = useNavigate();

//   const login = (e) => {
//     e.preventDefault();
//     axiox
//       .post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//       })
//       .then((response) => {
//         console.log("response", response);
//         localStorage.setItem(
//           "login",
//           JSON.stringify({
//             userLogin: true,
//             token: response.data.access_token,
//           })
//         );
//         setError("");
//         setEmail("");
//         setPassword("");
//         setLogoutUser(false);
//         history.push("/");
//       })
//       .catch((error) => setError(error.response.data.message));
//   };
//   return (
//     <div style={{ marginTop: "100px" }}>
//       <h2>Login Page</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <form
//         className={classes.root}
//         noValidate
//         autoComplete="off"
//         onSubmit={login}
//       >
//         <TextField
//           id="username"
//           label="Username"
//           type="text"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />
//         <TextField
//           id="password"
//           label="Password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         <Button
//           style={{ width: "100px" }}
//           variant="contained"
//           color="primary"
//           type="submit"
//         >
//           Login
//         </Button>
//       </form>
//       <p>
//         Don't have an account then please do{" "}
//         <Link to="/register">Register</Link> yourself
//       </p>
//     </div>
//   );
// };

// export default Login;