import axios from "axios";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [allProperties, setallProperties] = useState([]);

  useEffect(() => {
    axios.get("/users-properties").then((response) => {
      setallProperties(response.data);
    });
  }, []);

  return (
    <div className="w-full h-[89.5vh] pt-[2vmax]">
      {allProperties.length > 0 &&
        allProperties.map((property) => (
          <div className="border border-[#e81a61] w-[25vw] h-[50vh] p-[0.5vmax] rounded">
            <div>
              {property.propertyImages?.[0] && (
                <img
                  src={"http://localhost:4000/" + property.propertyImages?.[0]}
                  className="w-full h-[30vh] object-cover object-bottom rounded"
                />
              )}
            </div>
            <h1>{property.propertyTitle}</h1>
            <h1>{property.propertyAddress}</h1>
          </div>
        ))}
    </div>
  );
};

export default Index;
