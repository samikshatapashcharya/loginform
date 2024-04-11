import "./LandingScreen.css";
import React from 'react'
import  { useNavigate} from "react-router-dom";

const LandingScreen = () => {
  const navigate = useNavigate();

  function handleCreateAccount() {
    navigate("/signup");
  }
  function handleLoginAccount(){
    navigate("/login");
  }


  return (
    <div className="container">
      <div>
        <h3 className="heading">Welcome to PopX</h3>
        <p className="intro">
          Lorem ipsum dolor Sit met, consectetur adipiscing elit,
        </p>
              <div className="button_class">
          {/* call and chat button */}
          <button className="primary_btn"
         onClick={handleCreateAccount}
          >Create Account</button>
          <button className="outline_btn"
           onClick={handleLoginAccount} >Already Registered? Login</button>
        </div>
      </div>
    </div>
  );
};


export default LandingScreen;
