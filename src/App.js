// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import Countries from "./components/Countries";

import { useState, useEffect, useRef } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const countriesRef = useRef();
  function handleMode() {
    setToggle((toggle) => !toggle);
  }

  const API_END_POINT = `https://restcountries.com/v3.1/all`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_END_POINT);
        if (!res.ok) throw new Error("Failed..........");
        const data = await res.json();
        setCountries(data);
        console.log(data);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };
    fetchData();
  }, [API_END_POINT]);
  const searchCountries = () => {
    const searchValue = countriesRef.current.value;
    if (searchValue.trim()) {
      const fetchSearch = async () => {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${searchValue}`
        );
        const data = await res.json();
        setCountries(data);
      };
      try {
        fetchSearch();
      } catch (err) {
        console.log(err);
      }
    } else {
      return "error";
    }
  };
  const getCountryByRegion = async (region) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );

      if (!res.ok) throw new Error("Failed..........");

      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  return (
    <div>
      <Routes>
        <Route
          index
          element={
            <Countries
              countries={countries}
              toggle={toggle}
              handleMode={handleMode}
              onSelect={getCountryByRegion}
              isLoading={isLoading}
              error={error}
              countriesRef={countriesRef}
              searchCountries={searchCountries}
            />
          }
        />

        <Route
          path="/:name"
          element={
            <CountryDetail
              toggle={toggle}
              handleMode={handleMode}
              isLoading={isLoading}
              error={error}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
