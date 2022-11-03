import React from "react";
import { Link } from "react-router-dom";

function CountryCard({ name, flag, population, region, capital, toggle, hi }) {
  function HighlightedInput(name, hi) {
    const fullname = name.split(new RegExp(`(${hi})`, "gi"));
    return (
      <span>
        {" "}
        {fullname.map((fullname, i) => (
          <span
            key={i}
            style={
              fullname.toLowerCase() === hi.toLowerCase()
                ? { color: "#FFD700" }
                : {}
            }
          >
            {fullname}
          </span>
        ))}{" "}
      </span>
    );
  }
  return (
    <div
      className={
        toggle
          ? "w-64 tablet_1:w-56 tablet_3:w-56 cursor-pointer bg-mode-dark-blue rounded-lg border border-mode-dark-blue shadow-md text-el-white mobile:w-72 hover:shadow-lg"
          : "w-64 tablet_1:w-56 tablet_3:w-56 cursor-pointer bg-light-gray rounded-lg border border-gray-200 shadow-md text-bg-dark-blue mobile:w-72 hover:shadow-lg "
      }
    >
      <Link to={name}>
        <img
          src={flag}
          alt="country flag"
          className="rounded-t-lg h-40 w-64 mobile:w-72"
        />
      </Link>
      <div className="px-6  pb-8 w-60 ">
        {" "}
        <h1 className={"text-lg font-bold text-left font-nunito py-4 "}>
          {HighlightedInput(name, hi)}
        </h1>
        <p className="text-sm pb-1">
          <span className="font-semibold ">Population: </span>
          {population}
        </p>
        <p className="text-sm pb-1">
          <span className="font-semibold ">Region: </span>
          {region}
        </p>
        <p className="text-sm">
          <span className="font-semibold ">Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
