import { Link } from "react-router-dom";
import { FaUser, FaUserShield } from "react-icons/fa"; // Importing icons from react-icons
import s from "../components/Styles/Login.module.css";

function Login() {
  return (
    <div className={s.LoginContainer}>
      <div className={s.startContainer}>
          <h1 className={s.title}>Welcome to the Salon Booking System</h1>

        <div className={s.btns}>
          <Link to="/userLogin">
            <button className={s.button}>
              <FaUser style={{ marginRight: '8px' }} />User
            </button>
          </Link>
          <Link to="/admin">
            <button className={s.button}>
              <FaUserShield style={{ marginRight: '8px' }} />Admin
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
