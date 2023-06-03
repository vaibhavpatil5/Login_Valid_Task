import "./styles.css";
import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Reset previous error messages
    setEmailError("");
    setPasswordError("");

    if (email.length === 0) {
      setEmailError("The email field is required");
    } else if (!email.match(regExp)) {
      setEmailError("Invalid email");
    } else if (password.length === 0) {
      setPasswordError("The password field is required");
    } else {
      // Success, perform login action
      console.log("Login successful");
      setEmail("");
      setPassword("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(""); // Reset email error message
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(""); // Reset password error message
  };

  return (
    <div className="card-container">
      <img
        className="bgimg"
        src="https://picsum.photos/2000/300?grayscale"
        alt="background_img"
      />
      <form className="card" onSubmit={handleSubmit}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
          alt="amazon_img"
          width="90"
          height="25"
        />
        <hr />
        <h1>Login</h1>
        <img
          src="https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?size=626&ext=jpg&ga=GA1.1.1397887193.1685728761&semt=sph"
          alt="Log_img"
          width="250"
          height="150"
        />
        <div className="form">
          <div className="input-box">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
            />

            <div className="underline"></div>
            {emailError && (
              <span className="error">
                <i className="bx bxs-minus-circle "> {emailError}</i>
              </span>
            )}
          </div>
          <div className="input-box">
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
            />
            <div className="underline"></div>
            {passwordError && (
              <span className="error">
                <i className="bx bxs-minus-circle"> {passwordError}</i>
              </span>
            )}
          </div>

          <div className="input-box button">
            <input type="submit" name="" value="Sign In" />
          </div>

          <span className="forgot_pass">Forgot Password?</span>
          <span className="new_user">New User? Sign Up</span>
          <div className="or">or</div>
          <div className="google">
            <a href="#">
              <FaGoogle className="icon1" />
              CONTINUE WITH GOOGLE
            </a>
          </div>
          <div className="facebook">
            <a href="#">
              <FaFacebookF className="icon2" />
              CONTINUE WITH FACEBOOK
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
