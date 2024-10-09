import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaHome, FaLock, FaUpload } from "react-icons/fa"; // Importing icons from react-icons
import s from "../../components/Styles/UserRegister.module.css"; // Assuming you have a CSS module for styling

function UserRegister() {
  const [formData, setFormData] = useState({
    image: null,
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData, null, 2));
  };

  return (
    <div className={s.RegisterContainer}>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={`${s.formGroup} ${s.profilePhotoContainer}`}>
          <label>
            <FaUpload /> Upload Profile Photo
            <input type="file" name="image" onChange={handleChange} className={s.profilePhoto} />
          </label>
          {!formData.image && <FaUser className={s.icon} />}
        </div>
        <div className={s.formGroup}>
          <FaUser />
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className={s.formGroup}>
          <FaEnvelope />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className={s.formGroup}>
          <FaPhone />
          <input type="tel" name="phone" placeholder="Phone No" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className={s.formGroup}>
          <FaHome />
          <input type="text" name="address" placeholder="Current Address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className={s.formGroup}>
          <FaLock />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className={s.formGroup}>
          <FaLock />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <button type="submit" className={s.submitButton}>Register</button>
      </form>
    </div>
  );
}

export default UserRegister;
