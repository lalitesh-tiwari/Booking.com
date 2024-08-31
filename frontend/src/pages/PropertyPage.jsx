import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AccountNav from "../components/AccountNav";
import axios from "axios";

const PropertyPage = () => {
  const [myproperties, setmyproperties] = useState([]);

  useEffect(() => {
    axios.get("/myproperties").then(({ data }) => {
      setmyproperties(data);
    });
  }, []);

  return (
    <div>
      <AccountNav />
      <div className="h-[81vh]  border-black/25 px-[7.5vmax] overflow-auto">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-[1.2vmax] font-semibold">
            My Properties <span>({myproperties.length})</span>
          </h1>
          <Link
            to={"/myaccount/myproperties/addnew"}
            className="bg-[#e81a61] text-white px-[1vmax] py-[0.5vmax] rounded-md"
          >
            <i className="ri-menu-add-line font-thin mr-[0.2vmax]"></i>
            Add New Property
          </Link>
        </div>
        <div className="rounded w-full mt-[1vmax]">
          {myproperties.length > 0 &&
            myproperties.map((property) => (
              <Link
                to={`/myaccount/myproperties/${property._id}`}
                key={property._id}
                className="w-full h-[30vh] border-[1px] border-[#e81a61] rounded flex items-center gap-[1vmax] p-[0.5vmax] cursor-pointer mb-[0.5vmax]"
              >
                <div className="rounded w-[20%] flex flex-wrap h-full">
                  {property.propertyImages.length > 0 && (
                    <img
                      src={
                        "http://localhost:4000/" + property.propertyImages[0]
                      }
                      className="w-full h-full object-cover rounded"
                    />
                  )}
                </div>
                <div className=" w-[35%] h-full flex flex-col gap-[0.25vmax]">
                  <h1 className="text-[1.5vmax] font-semibold mb-[0.25vmax]">
                    {property.propertyTitle}
                  </h1>
                  <p className="text-[1vmax] font-semibold">
                    🏠 {property.propertyType}
                  </p>
                  <p className="text-[0.95vmax] ">
                    ◾{property.propertyDescription}
                  </p>
                  <p className="text-[0.95vmax]">
                    👥Max Guests:{" "}
                    <span className="font-semibold">{property.maxGuest}</span>
                  </p>
                  <p className="text-[0.8vmax]">
                    <span className="text-[1.1vmax]">📍</span>
                    {property.propertyAddress}
                  </p>
                </div>
                <div className="w-[40%] h-full flex flex-wrap gap-[0.5vmax] p-[1vmax] ">
                  {property.propertyOfferings.length > 0 &&
                    property.propertyOfferings.map((offering, index) => (
                      <p
                        key={index}
                        className="border-b border-black/20 w-[30%] flex items-center text-[1vmax]"
                      >
                        ▪ {offering}
                      </p>
                    ))}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
