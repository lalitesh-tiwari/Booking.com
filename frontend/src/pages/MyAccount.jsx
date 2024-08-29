import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PropertyPage from "./PropertyPage";
import AccountNav from "../components/AccountNav";

const MyAccount = () => {
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

  if (logOutRedirect) {
    return <Navigate to={logOutRedirect} />;
  }
  return (
    <div>
      <AccountNav />
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

export default MyAccount;
