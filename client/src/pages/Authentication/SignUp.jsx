import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/register", {
        name,
        email,
        password,
      });
      // Handle successful sign up here
      toast.success("Sign up successful");
      console.log("Response:", response.data);
    } catch (error) {
      // Handle sign up error here (e.g., display error message)
      toast.error("Sign up failed");
      console.log("Error:", error.response.data.message);
    }
  };

  return (
    <section className="login section">
      <h2 className="section_title">
        Sign Up For <span>Admin</span>
      </h2>
      <form className="login_form" onSubmit={handleSignUp}>
        <div className="login_form_input-group">
          <div className="form_input-div">
            <label className="login_form-title">Name:</label>
            <input
              type="text"
              placeholder="Your Name"
              className="form_control"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="form_input-div">
            <label className="login_form-title">Email:</label>
            <input
              type="email"
              placeholder="Your Email"
              className="form_control"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form_input-div">
            <label className="login_form-title">Password:</label>
            <input
              type="password"
              placeholder="Your Password"
              className="form_control"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <button className="button login_button" type="submit">
          <span className="button_name">Sign Up</span>
        </button>
      </form>
      <ToastContainer />
    </section>
  );
};
export default SignUp;
