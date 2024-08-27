import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [redirect, setredirect] = useState(false);
  const { setuser } = useContext(UserContext);

  async function userLoginHandler(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("/login", { email, password });
      setuser(data);
      alert("Login Successful!");
      setredirect(true);
    } catch (e) {
      alert("Login Failed!");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="w-full h-[90vh] flex items-center justify-center">
      <form
        onSubmit={userLoginHandler}
        className="border border-[#e61a81] rounded-lg w-[35%] h-[70%] flex flex-col items-center justify-center gap-[1vmax]"
      >
        <h1 className="text-[2vmax] text-[#e81a61] leading-[2.3vmax] mb-[1.5vmax] font-[400]">
          Welcome to <i className="ri-home-heart-fill font-thin "></i>
          Booking.com <br />
          <span className="text-[1.4vmax] tracking-wider">Login...</span>
        </h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          className="w-[25vmax] h-[3vmax] rounded-lg text-black text-center border border-[#d0d0d0] outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          className="w-[25vmax] h-[3vmax] rounded-lg text-black text-center border border-[#d0d0d0] outline-none"
        />
        <button className="w-[25vmax] h-[3vmax] text-white rounded-lg bg-[#e81a61] mt-[1vmax]">
          Login!
        </button>
        <p className="text-[0.9vmax] text-[#e61a81] -ml-[9vmax]">
          Haven't Registered Yet?{" "}
          <Link to="/register" className="font-semibold underline">
            Register Here...
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
