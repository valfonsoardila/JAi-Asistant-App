import React from "react";
import { resources } from "../../../assets/resources";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./ForgotPage.css";

const ForgotPage = ({ onComponentChange }) => {
  const handleRegisterClick = () => {
    onComponentChange("login");
  };
  return (
    <>
      <div className="back-arrow">
        <FontAwesomeIcon icon={faArrowLeft} onClick={handleRegisterClick} />
      </div>

      <div className="form-container">
        <div className="form-header">
          <h3>Did you forget your password?</h3>
        </div>
        <div className="form-paragraph">
          <p>
            If you have forgotten your password, please enter your email address
            to send you an access recovery link.
          </p>
        </div>
        <div className="form-body">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Forgot</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPage;
