// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import Countries from "./components/Countries";

import { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");
  const itemsToDisplay = countries.filter((c) => {
    if (search === "") {
      return true;
    } else if (c.name.common.toLowerCase().includes(search.toLowerCase())) {
      return c;
    }
  });
  function handleSearch(e) {
    setSearch(e.target.value);
  }
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
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [API_END_POINT]);

  const getCountryByRegion = async (region) => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );

      if (!res.ok) throw new Error("Failed..........");

      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Routes>
        <Route
          index
          element={
            <Countries
              countries={itemsToDisplay}
              toggle={toggle}
              handleMode={handleMode}
              onSelect={getCountryByRegion}
              onSearchChange={handleSearch}
              search={search}
            />
          }
        />

        <Route
          path="/:name"
          element={<CountryDetail toggle={toggle} handleMode={handleMode} />}
        />
      </Routes>
    </div>
  );
}

export default App;
