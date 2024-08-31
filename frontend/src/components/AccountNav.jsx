import React from "react";
import { Link, useLocation } from "react-router-dom";

const AccountNav = () => {
  const { pathname } = useLocation();
  let subpage = pathname.split("/")?.[2];
  if (subpage === undefined) {
    subpage = "myaccount";
  }

  function activeLink(type = null) {
    let classes = "px-[1.5vmax] py-[0.5vmax]";
    if (type === subpage) {
      classes += " bg-[#e81a61] text-white rounded-[2vmax] font-semibold";
    }
    return classes;
  }

  return (
    <nav className="w-full h-[8vh] flex items-center justify-center">
      <div className="w-[40%] h-[6.5vh] border border-[#d0d0d0] flex items-center justify-evenly rounded-[3vmax]">
        <Link to={"/myaccount"} className={activeLink("myaccount")}>
          <i className="ri-user-3-fill font-thin mr-[0.2vmax]"></i>
          My Profile
        </Link>
        <div className="w-[0.7px] h-[70%] bg-[#bfbfbf]"></div>
        <Link to={"/myaccount/mybookings"} className={activeLink("mybookings")}>
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
  );
};

export default AccountNav;
