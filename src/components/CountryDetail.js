import React from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Header from "./Header";
function CountryDetail({ toggle, handleMode }) {
  const { name } = useParams();
  const [countries, setCountries] = useState([]);
  const API_END_POINT = `https://restcountries.com/v3.1/name/${name}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_END_POINT);
        const data = await res.json();
        setCountries(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [API_END_POINT]);
  return (
    <div className={toggle ? " bg-bg-dark-blue text-el-white" : " bg-el-white"}>
      <Header toggle={toggle} handleMode={handleMode} />

      <div className="mt-14 mx-52 pb-44 mobile:mx-8 font-nunito">
        <div className="mb-14">
          <button
            className={
              toggle
                ? "flex items-center py-1 px-7 mobile:px-5 mobile:text-sm bg-mode-dark-blue rounded-md  border-2 hover:shadow-lg text-el-white"
                : "flex items-center py-1 px-7 mobile:px-5 mobile:text-sm bg-light-gray rounded-md  border-2 hover:shadow-lg text-text-dark-blue"
            }
          >
            <Link to="/">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="w-4 h-4 mr-2 mobile:w-3 mobile:h-3"
              />
              Back
            </Link>
          </button>
        </div>
        {countries.map((c) => {
          return (
            <div className="flex gap-4 mobile:flex-col">
              <div className="w-1/2 mobile:w-full ">
                {
                  <img
                    src={c.flags.png}
                    alt="the country flag"
                    className="w-96 shadow-xl object-contain mb-5"
                  />
                }
              </div>

              <div className=" w-1/2 py-4 ">
                <h1 className="text-xl mb-7 font-extrabold">
                  {c.name.official}
                </h1>
                <div className="grid grid-cols-2 mobile:grid-cols-1">
                  <p className="text-sm  mb-3 ">
                    <span className="font-bold"> Native Name: </span>
                    <span
                      className={toggle ? "text-gray-300" : "text-dark-gray"}
                    >
                      {Object.values(Object.values(c.name)[2])[0].official}
                    </span>
                  </p>
                  <p className="text-sm  mb-3 ">
                    <span className="font-bold">Population: </span>
                    <span
                      className={toggle ? "text-gray-300" : "text-dark-gray"}
                    >
                      {new Intl.NumberFormat().format(c.population)}
                    </span>
                  </p>

                  <p className="text-sm font-normal mb-3">
                    <span className="font-bold">Region: </span>
                    <span
                      className={toggle ? "text-gray-300" : "text-dark-gray"}
                    >
                      {c.region}
                    </span>
                  </p>
                  <p className="text-sm font-normal mb-3">
                    <span className="font-bold">Sub Region: </span>
                    <span
                      className={toggle ? "text-gray-300" : "text-dark-gray"}
                    >
                      {c.subregion}
                    </span>
                  </p>
                  <p className="text-sm font-normal mb-3">
                    <span className="font-bold">Capital: </span>
                    <span
                      className={toggle ? "text-gray-300" : "text-dark-gray"}
                    >
                      {c.capital || "No Capital"}
                    </span>
                  </p>
                  <div className="mobile:mt-8">
                    <p className="text-sm font-normal mb-3">
                      <span className="font-bold">Top Level Domain: </span>
                      <span
                        className={toggle ? "text-gray-300" : "text-dark-gray"}
                      >
                        {c.tld}
                      </span>
                    </p>
                    <p className="text-sm font-normal mb-3">
                      <span className="font-bold">Currencies: </span>
                      <span
                        className={toggle ? "text-gray-300" : "text-dark-gray"}
                      >
                        {" "}
                        {Object.values(Object.values(c.currencies)[0])[0]}
                      </span>
                    </p>
                    <p className="text-sm font-normal mb-3">
                      <span className="font-bold">Languages: </span>
                      <span
                        className={toggle ? "text-gray-300" : "text-dark-gray"}
                      >
                        {" "}
                        {Object.values(c.languages)[0]}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountryDetail;
