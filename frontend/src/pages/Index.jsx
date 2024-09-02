import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [allProperties, setallProperties] = useState([]);

  useEffect(() => {
    axios.get("/users-properties").then((response) => {
      setallProperties(response.data);
    });
  }, []);

  return (
    <div className="w-full h-[89.5vh] flex flex-wrap justify-center overflow-y-auto px-[5vmax]">
      {allProperties.length > 0 &&
        allProperties.map((property) => (
          <Link
            to={"/property/" + property._id}
            className="border border-[#e81a61] w-[22.5vw] h-[52.5vh] p-[0.5vmax] my-[0.5vmax] mx-[1vmax] rounded hover:bg-[#e81a61] hover:text-white duration-200 hover:scale-[0.99]"
          >
            <div>
              {property.propertyImages?.[0] && (
                <img
                  src={"http://localhost:4000/" + property.propertyImages?.[0]}
                  className="w-full h-[30vh] object-cover rounded mb-[0.3vmax]"
                />
              )}
            </div>
            <p className="text-[0.7vmax] font-semibold">
              <span className="text-[1vmax]">📍{property.propertyType} </span>
              in {property.propertyAddress}
            </p>
            <h1 className="text-[1.1vmax] font-semibold mt-[0.2vmax]">
              🏠
              <span className="underline underline-offset-1">
                {property.propertyTitle}
              </span>
            </h1>
            <p className="text-[0.85vmax]">
              ◾{property.propertyDescription.slice(0, 100)}..
            </p>
            <div className="w-full flex justify-between mt-[0.3vmax]">
              <p className="text-[1.1vmax] font-semibold">
                👥Guests: {property.maxGuest}
              </p>
              <p className="text-[1.1vmax] font-semibold mr-[0.5vmax]">
                ₨ {property.price}{" "}
                <span className="font-normal text-[0.9vmax]">per Night</span>
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Index;
