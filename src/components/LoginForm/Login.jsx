import React, {useState} from "react";
import "./Login.css";
import {useNavigate} from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [input, setInput] = useState({
            email:"",
            password:""
  });


  //to store value in local storage
  const handleSubmit =(e) =>{
    e.preventDefault();
    //  localStorage.setItem("user",JSON.stringify(input));
     navigate("/profile");
  }
  return (
    <div className="container">
      <div className="headingLine">
        <h3>SignIn to Your PopX Account</h3>
        <p className="introduction">
          Lorem ipsum dolor Sit met, consectetur adipiscing elit,
        </p>

        <div className="contact_form">
          <form  onSubmit={handleSubmit}>
            <div className="form_control">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                name="email"
                id="email"
                value={input.email}
                onChange={(e)=>setInput({...input,[e.target.password] : e.target.value})}
                placeholder="Enter email Address"
              />
            </div><br/>
            <div className="form_control">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                // value={input.password}
                // onChange={(e)=>setInput({...input,[e.target.password] : e.target.value})}
                placeholder="Enter password"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <button text="SUBMIT" className="button" >Login</button>
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
