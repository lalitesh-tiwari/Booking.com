import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Nav = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <nav className="w-full h-[10vh] flex items-center justify-between">
        <Link to={"/"} className="text-[1.5vmax] font-bold text-[#E81A61]">
          <i className="ri-home-heart-fill text-[2vmax] font-thin "></i>
          Booking.com
        </Link>
        <div className="border border-[#d0d0d0] px-[0.4vmax] py-[0.3vmax] flex gap-1 items-center justify-center rounded-[3vmax]">
          <a
            href=""
            className="border-r border-black/30 w-[7vmax] flex items-center justify-center text-[1vmax] font-semibold"
          >
            Any Where
          </a>
          <a
            href=""
            className="border-r border-black/30 w-[6vmax] flex items-center justify-center text-[1vmax] font-semibold"
          >
            Any Day
          </a>
          <a
            href=""
            className="w-[7vmax] flex items-center justify-center text-[1vmax] font-semibold"
          >
            Add Guests
          </a>
          <a
            href=""
            className="px-[0.6vmax] py-[0.3vmax] flex items-center justify-center bg-[#E81A61] rounded-full "
          >
            <i className="ri-search-2-line text-[1.2vmax] text-white"></i>
          </a>
        </div>
        <Link
          to={user ? "/myaccount" : "/login"}
          className="border border-[#d0d0d0] py-[0.3vmax] px-[1vmax] rounded-[2vmax] flex items-center gap-[1vmax]"
        >
          <i className="ri-menu-line text-[1.5vmax] font-thin"></i>
          <div className="rounded-full w-[2.2vmax] h-[2.2vmax] bg-[#6A6A6A] flex items-center justify-center">
            <i className="ri-user-fill text-[1.3vmax] text-white"></i>
          </div>
          {!!user && <div>{user.fullname}</div>}
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
