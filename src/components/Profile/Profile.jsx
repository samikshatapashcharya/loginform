import React from "react";
import "./Profile.css";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="container">
      <div className="profile_container">
        <h3>Account Setting</h3>

        <div className="row">
          <div className="img">
            <div className="Pic-container">
              {/* <FaCamera
              style={
                {color:"green",
                marginLeft:"100px",
                border:"1px green solid"}
              }/> */}
              <img src=".\img\profile.png" alt="profile_pic" />
            </div>
          </div>
          <div className="bio">
            <h3>Marry Doe</h3>
            <p>Marry@gmail.com</p>
          </div>
        </div>
        <p className="intr">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </div>
  );
};

export default Profile;
