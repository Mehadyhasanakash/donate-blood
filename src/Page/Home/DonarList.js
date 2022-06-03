import React, { useEffect, useState } from "react";
import DisplayDonarList from "./DisplayDonarList";

const DonarList = () => {
  const [donars, setDonars] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setDonars(data));
  }, []);
  return (
    <div>
      <h1 className="3xl text-red-700 text-center font-bold mt-10">
        সকল রক্তদাতাদের লিস্ট
      </h1>
      <div class="flex flex-col w-full border-opacity-50">
        <div class="divider">রক্তদাতা</div>
      </div>

      <div className=" grid grid-cols-4 gap-4">
        {donars.map((donar) => (
          <DisplayDonarList donar={donar}></DisplayDonarList>
        ))}
      </div>
    </div>
  );
};

export default DonarList;
