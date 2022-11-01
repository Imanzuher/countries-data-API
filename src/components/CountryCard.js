import React from "react";
import { Link } from "react-router-dom";

function CountryCard({ name, flag, population, region, capital, toggle }) {
  return (
    <div
      className={
        toggle
          ? "w-64 cursor-pointer bg-mode-dark-blue rounded-lg border border-mode-dark-blue shadow-md text-el-white"
          : "w-64 cursor-pointer bg-light-gray rounded-lg border border-gray-200 shadow-md text-bg-dark-blue"
      }
    >
      <Link to={name}>
        <img src={flag} alt="country flag" className="rounded-t-lg" />
      </Link>
      <div className="px-6  pb-2">
        {" "}
        <h1 className="text-lg font-bold text-left font-nunito py-4">{name}</h1>
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
