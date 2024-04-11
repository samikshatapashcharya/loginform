import React from "react";
import "./Signup.css";
import {useNavigate} from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();
  //to navigate
  const handleSubmit =(e) =>{
    e.preventDefault();
    //  localStorage.setItem("user",JSON.stringify(input));
     navigate("/profile");
  }

  return (
    <div className="container">
      <div className="headingLine">
        <h3>Create Your PopX Account</h3>

        <div className="contact_form">
          <form  onSubmit={handleSubmit}>
            <div className="form_control">
              <label htmlFor="fullName">
                Full Name <span>*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Full Name"
              />
            </div>
            <br />

            <div className="form_control">
              <label htmlFor="phoneNumber">
                Phone Number <span>*</span>
              </label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Enter your number"
              />
            </div>
            <br />

            <div className="form_control">
              <label htmlFor="email">
                Email Address<span>*</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Enter email Address"
              />
            </div>
            <br />

            <div className="form_control">
              <label htmlFor="password">
                Password <span>*</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
              />
            </div>
            <br />

            <div className="form_control">
              <label htmlFor="companyName">
                Company Name<span>*</span>
              </label>
              <input
                type="text"
                name="companyName"
                placeholder="Enter Company Name"
              />
            </div>
            <br />
            <div className="radio_container">
              <p>
                Are You an Agency?<span>*</span>
              </p>
              <input type="radio" value="yes" /> yes
              <input type="radio" value="No" />
              No
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <button className="button" text="SUBMIT">Create Account</button>
            </div>
            <div></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
