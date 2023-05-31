import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });

      // Assuming the response contains a token
      const token = response.data.token;

      // Save the token to localStorage
      localStorage.setItem("token", token);

      // Handle successful login here (e.g., redirect to admin dashboard)
      toast.success("Login successful", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        onClose: () => {
          navigate("/admindashboard"); // Navigate after the toast message is closed
          setTimeout(() => {
            window.location.reload();
          }, 1000); // Delay the reload by 1000 milliseconds (1 second)
        },
      });
      // Set isLoggedIn state to true
    } catch (error) {
      // Handle login error here (e.g., display error message)
      toast.error("Login failed");
      console.log("Error:", error.response.data.message);
    }
  };

  return (
    <section className="login section">
      <h2 className="section_title">
        Login For <span>Admin</span>
      </h2>
      <form className="login_form" onSubmit={handleLogin}>
        <div className="login_form_input-group">
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
          <span className="button_name">Login</span>
        </button>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Login;
