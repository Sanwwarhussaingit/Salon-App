/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importing Link for navigation
import s from "../../Styles/UserLogin.module.css"; // Assuming you have a CSS module for styling
import barber1 from "../../assets/barber1.png";
function UserLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData, null, 2));
    const success = await loginUser(formData.username, formData.password);
    if (success) {
      navigate("/user/home");
      
    } else {
      console.log("username and password are incorrect");
    }
  };

  const loginUser = async (username, password) => {
    const url = "http://localhost:3000/user/login";
    const body = JSON.stringify({
      username: username,
      password: password,
    });
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: body,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data.token); // Handle the response data as needed

      // Set the token in the local storage for future requests
      localStorage.setItem("token", data.token);

      return true;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  };

  return (
    <div className={s.container}>
      <div className={s.userLoginContainer}>
        <div className={s.leftImage}>
          <img className={s.barber1} src={barber1} alt="berber image" />
        </div>

        <div className={s.rightLoginForm}>
          <h1>User Login</h1>
          <p>Please enter login details below</p>

          <form onSubmit={handleSubmit} className={s.userLoginForm}>
            <div className={s.inputContainer}>
              <label className={s.usernameLabel} htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="username number"
                value={formData.username}
                onChange={handleChange}
                required
                className={s.username}
              />
            </div>

            <div className={s.inputContainer}>
              <label className={s.passwordLabel} htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className={s.inputPassword}
              />
            </div>
            {/* forgate password */}
            <div className={s.forgatePassword}>
              <Link className={s.forgateLink} to="/forgotPassword">
                Forgot Password?
              </Link>
            </div>

            <button className={s.loginBtn} type="submit">
              Login
            </button>
          </form>
          <div>
            <p>or</p>
            <div className={s.inputContainer}>
              <Link to="/socialLogin" className={s.socialLoginLink}>
                <i className="fab fa-facebook-square"></i>
                <span>Login with Facebook</span>
              </Link>
            </div>
            <Link to="/socialLogin" className={s.socialLoginLink}>
              <i className="fab fa-google"></i>
              <span>Login with Google</span>
            </Link>
          </div>
          <p>
            Don t have an account?{" "}
            <Link to="/userRegister" style={{ color: "var(--main-color)" }}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;

//wright style here
