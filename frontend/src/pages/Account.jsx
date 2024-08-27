import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PropertyPage from "./PropertyPage";

const Account = () => {
  const [logOutRedirect, setlogOutRedirect] = useState(null);
  const { value, user, setuser } = useContext(UserContext);

  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "myaccount";
  }

  async function logOut() {
    await axios.post("/logout");
    setlogOutRedirect("/");
    setuser(null);
  }

  if (!value) {
    return "Loading...";
  }

  if (value && !user && !logOutRedirect) {
    return <Navigate to={"/login"} />;
  }

  function activeLink(type = null) {
    let classes = "px-[1.5vmax] py-[0.5vmax]";
    if (type === subpage) {
      classes += " bg-[#E81A61] text-white rounded-[2vmax] font-semibold";
    }
    return classes;
  }

  if (logOutRedirect) {
    return <Navigate to={logOutRedirect} />;
  }
  return (
    <div>
      <nav className="w-full h-[8vh] flex items-center justify-center">
        <div className="w-[40%] h-[6.5vh] border border-[#d0d0d0] flex items-center justify-evenly rounded-[3vmax]">
          <Link to={"/myaccount"} className={activeLink("myaccount")}>
            <i className="ri-user-3-fill font-thin mr-[0.2vmax]"></i>
            My Profile
          </Link>
          <div className="w-[0.7px] h-[70%] bg-[#bfbfbf]"></div>
          <Link
            to={"/myaccount/mybookings"}
            className={activeLink("mybookings")}
          >
            <i className="ri-list-check-3 font-thin mr-[0.2vmax]"></i>
            My Bookings
          </Link>
          <div className="w-[0.7px] h-[70%] bg-[#bfbfbf]"></div>
          <Link
            to={"/myaccount/myproperties"}
            className={activeLink("myproperties")}
          >
            <i className="ri-community-line font-thin mr-[0.2vmax]"></i>
            My Properties
          </Link>
        </div>
      </nav>
      {subpage === "myaccount" && (
        <div className="border border-black h-[81vh] pt-[2vmax]">
          <h1>Logged In As {user.fullname}</h1>
          <p>Email: {user.email}</p>
          <button
            onClick={logOut}
            className="bg-[#E81A61] text-white px-[1vmax] py-[0.25vmax] rounded-lg mt-[0.5vmax]"
          >
            Logout
          </button>
        </div>
      )}
      {subpage === "myproperties" && <PropertyPage />}
    </div>
  );
};

export default Account;
