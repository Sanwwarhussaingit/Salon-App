/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import s from "../../Styles/Header.module.css";
import salonLogo from "./salon-app-logo.png";
import { useState } from "react";
import { ImMenu3, ImMenu4 } from "react-icons/im";

const Header = ({ isAuthenticated, userType }) => {
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   onLogout(); // Call the logout function
  //   navigate("/"); // Redirect to the landing page after logout
  // };

  const [isNavVisible, setIsNavVisible] = useState(true);
  const handleToggleNav = () => {
    setIsNavVisible(prev => !prev);
  };
  return (
    <header className={s.header}>
      {/* <div className={s.logo}> */}
      <Link to="/" className={s.logo}>
        <img
          src={salonLogo}
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
            borderRadius: 50,
            border: "1px solid var(--main-color)",
            boxShadow: "0 0 4px var(--main-color)"
          }}
        />
        <span className={`${s.logoTxt}`}>Local Barber</span>
      </Link>

      <nav className={`${s.navbar} ${isNavVisible && s.visible}`}>
        <ul className={s.linksContainer}>
          {/* Navigation for users */}
          {userType === "user" && (
            <>
              <li className={s.li}>
                <Link to="/user/home" className={s.link}>
                  Home
                </Link>
              </li>
              <li className={s.li}>
                <Link to="/user/bookings" className={s.link}>
                  My Bookings
                </Link>
              </li>

              <li className={s.li}>
                <Link to="/user/allSalon" className={s.link}>
                  Salon List
                </Link>
              </li>

              <li className={s.li}>
                <Link to="/user/profile" className={s.link}>
                  Profile
                </Link>
              </li>
            </>
          )}

          {/* Navigation for admins */}
          {userType === "admin" && (
            <>
              <li className={s.li}>
                <Link to="/admin/home" className={s.link}>
                  Admin Dashboard
                </Link>
              </li>
              <li className={s.li}>
                <Link to="/admin/manage" className={s.link}>
                  Manage Salon
                </Link>
              </li>
              <li className={s.li}>
                <Link to="/admin/profile" className={s.link}>
                  Profile
                </Link>
              </li>
            </>
          )}

          {(userType === "admin" || userType === "user") && (
            <>
              <li to="/about" className={s.li}>
                <Link className={s.link}>About us</Link>
              </li>

              <li to="/contact" className={s.li}>
                <Link className={s.link}>Contact us</Link>
              </li>
            </>
          )}
        </ul>
          
          {/* line */}
          <div className={s.line}></div>

          <div className={s.logins}>
            {/* If the user is not authenticated, show login/register links */}
            {!isAuthenticated ? (
              <>
                <li className={`${s.li} ${s.userLoginContainer}`} >
                  <Link to="/user/login" className={`${s.link} ${s.userLogin}`}>
                    User Login
                  </Link>
                </li>
                <li className={`${s.li} ${s.adminLoginContainer}`}>
                  <Link to="/admin/login" className={`${s.link} ${s.adminLogin}`}>
                    Admin Login
                  </Link>
                </li>
              </>
            ) : (

              <div className={s.userLogo}>
                <img
                  className={s.imgLogo}
                 src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-color-icon.png" />
                <span className={s.logoName}>Sanwwar hussain</span>
              </div>


              // <li className={s.logout}>
              //   <button className={s.logoutBtn} onClick={handleLogout}>
              //     Logout
              //   </button>
              // </li>
            )}
          </div>
      </nav>

      <div className={s.hamburger} onClick={handleToggleNav}>
      {isNavVisible? <ImMenu4 style={{fontSize: "34px"}} /> :<ImMenu3 style={{fontSize: "34px"}} />}
      </div>
    </header>
  );
};

export default Header;
