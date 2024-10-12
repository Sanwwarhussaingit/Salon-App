import { FaCalendar, FaUser, FaUserShield } from "react-icons/fa";
import s from "../Styles/Landing.module.css";
import { Link } from "react-router-dom";
import salonman from "../assets/salonman.png";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

function LandingPage() {



  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "welcome to my portfolio",
        "Frontend",
        "Responsive Design",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false
    };

    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);



  return (
    <>
      <div className={s.container}>
        <div className={`${s.left}`}>

        <div className={s.typeText}>
          <h1 ref={typedRef}></h1>
        </div>

          <h1 className={s.title}>Welcome to the Salon Booking System</h1>
          <div className={s.btns}>
            <Link to="/userLogin">
              <button className={s.button}>
                <FaUser style={{ marginRight: "8px" }} />
                User
              </button>
            </Link>
            <Link to="/adminLogin">
              <button className={s.button}>
                <FaUserShield style={{ marginRight: "8px" }} />
                Admin
              </button>
            </Link>

            <Link to="/booking">
              <button className={s.button}>
                <FaCalendar style={{ marginRight: "8px" }} />
                Book an appointment
              </button>
            </Link>
          </div>
        </div>

        <div className={`${s.right}`}>
              <img src={salonman}/>
        </div>
      </div>
      <h1>

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta aspernatur laboriosam numquam in provident impedit facilis molestias velit, ratione ipsam sint asperiores doloribus ducimus quasi incidunt eius mollitia fugit esse! Nisi, quas? Repellendus commodi quod totam sunt ipsum neque, deserunt quaerat rerum iure fugit voluptas minima harum fugiat similique inventore assumenda porro officiis ducimus impedit accusamus adipisci iste consequatur ab. Sequi, nam? Quisquam labore reprehenderit asperiores distinctio assumenda similique consequuntur suscipit quia. Porro quasi obcaecati vitae. Rerum impedit laboriosam soluta eaque numquam sint quaerat nostrum asperiores? Voluptatibus exercitationem eaque ea dolorem iusto maxime laboriosam atque, fugiat voluptates, asperiores temporibus explicabo accusamus quaerat consequatur ipsum, dolor ullam sed voluptate? Nemo facilis et ad molestiae dolor rem repellendus numquam saepe ea, nostrum exercitationem, aperiam ipsum. Natus omnis consectetur sequi, vero sed ipsum itaque reiciendis quisquam dolores temporibus hic dicta fugiat deleniti vitae voluptas aut, quas voluptate corrupti possimus. Temporibus eveniet doloribus quo aliquid impedit. Rerum deserunt amet eveniet nisi, iusto dolore a temporibus dicta harum error. Aliquam quidem tempore, saepe facilis quod, culpa laudantium, praesentium laboriosam blanditiis rem porro debitis labore corrupti distinctio cumque dignissimos exercitationem. Delectus minus doloremque nostrum cumque consequatur porro pariatur, debitis nihil magnam impedit quibusdam sequi ex consequuntur?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi obcaecati explicabo dolor. Atque aspernatur sapiente inventore magnam aut error laborum, laudantium recusandae deserunt saepe maiores dignissimos consectetur et eos harum quam! Vero corrupti iure iusto explicabo odio ut, voluptates dolorum quasi unde quis voluptatem natus nesciunt eius. Dolorum ab, soluta voluptas quos, ratione tenetur hic nisi enim exercitationem praesentium aut, at ullam nam vitae alias. Deleniti dignissimos nobis quam veritatis nulla qui corporis error nemo vero ratione accusantium doloremque ipsa facilis dolore, a laborum, nisi exercitationem incidunt alias! Fugiat modi aut eaque, maxime distinctio iure quasi esse ut architecto.
      </h1>
    </>
  );
}

export default LandingPage;
