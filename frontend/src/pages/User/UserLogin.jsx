import { useState } from "react";
import { FaPhone, FaLock } from "react-icons/fa"; // Importing icons from react-icons
import { Link } from "react-router-dom"; // Importing Link for navigation
import s from "../../components/Styles/UserLogin.module.css"; // Assuming you have a CSS module for styling

function UserLogin() {
  const [formData, setFormData] = useState({
    phone: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData, null, 2));
  };

  return (
    <div className={s.userLoginContainer}>
      <h1>User Login</h1>
      <form onSubmit={handleSubmit} className={s.userLoginForm}>
        <div className={s.inputContainer}>
          <FaPhone />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className={s.inputNumber}
          />
        </div>
        
        <div className={s.inputContainer} >
          <FaLock />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className={s.inputPassword}
          />
        </div>
        <button className={s.loginBtn} type="submit">Login</button>
      </form>
      <p>
        Don t have an account? <Link to="/userRegister">Register</Link>
      </p>
    </div>
  );
}

export default UserLogin


//wright style here 