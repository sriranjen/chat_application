import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import Companylogo from "../img/companylogo.png";
import earth from "../img/earth.gif";
const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    let file = e.target[3].files[0];
    console.log("display", file, "=");

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      console.log(err);
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formContainer1">
        <div className="formWrapper">
          <div className="companylogo">
            <img src={Companylogo} />
            <span className="logo">
              <h2>Chat_</h2>
              <img src={earth} alt="img not found" />
              <h2>n...</h2>
            </span>
          </div>
          <span className="title">register</span>
          <form onSubmit={handleSubmit}>
            <div className="inputbox">
              <input required type="text" name="fname" />
              <label htmlFor="">Display name</label>
            </div>

            <div className="inputbox">
              <input required type="email" />
              <label htmlFor="">Email</label>
            </div>

            <div className="inputbox">
              <input required type="password" />
              <label htmlFor="">Password[min 6-char]</label>
            </div>

            <input style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
              <img src={Add} alt="" />
              <span>Add an avatar</span>
            </label>
            <button disabled={loading}>
              <span>Sign up</span>
            </button>
            {loading && "Uploading and compressing the image please wait..."}
            {err && <span>Something went wrong</span>}
          </form>
          <p>
            You do have an account?{" "}
            <Link to="/login" style={{ color: "#e32d2d" }}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
