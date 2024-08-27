import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [fullname, setfullname] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  async function userRegisteration(e) {
    e.preventDefault();
    try {
      await axios.post("/register", {
        fullname,
        number,
        email,
        password,
      });
      alert("User Registered!, Now You Can Log In...");
    } catch (error) {
      console.log(error);

      alert("Registration Failed!, Try Again...");
    }
  }

  return (
    <div className="w-full h-[90vh] flex items-center justify-center">
      <form
        onSubmit={userRegisteration}
        className="border border-[#e61a81] rounded-lg w-[35%] h-[70%] flex flex-col items-center justify-center gap-[1vmax]"
      >
        <h1 className="text-[2vmax] text-[#e81a61] leading-[2.3vmax]  font-[400]">
          Welcome to <i className="ri-home-heart-fill font-thin "></i>
          Booking.com <br />
          <span className="text-[1.4vmax] tracking-wider">Register...</span>
        </h1>
        <input
          type="text"
          placeholder="Full Name"
          value={fullname}
          onChange={(e) => setfullname(e.target.value)}
          className="w-[25vmax] h-[2.7vmax] rounded-lg text-black text-center border border-[#d0d0d0] outline-none"
        />
        <input
          type="number"
          placeholder="Mobile Number"
          value={number}
          onChange={(e) => setnumber(e.target.value)}
          className="w-[25vmax] h-[2.7vmax] rounded-lg text-black text-center border border-[#d0d0d0] outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          className="w-[25vmax] h-[2.7vmax] rounded-lg text-black text-center border border-[#d0d0d0] outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          className="w-[25vmax] h-[2.7vmax] rounded-lg text-black text-center border border-[#d0d0d0] outline-none"
        />
        <button
          type="submit"
          className="w-[25vmax] h-[3vmax] text-white rounded-lg bg-[#e81a61]"
        >
          Register!
        </button>
        <p className="text-[0.9vmax] text-[#e61a81] -ml-[9vmax]">
          Already Registered?{" "}
          <Link to="/login" className="font-semibold underline">
            Login Here...
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
