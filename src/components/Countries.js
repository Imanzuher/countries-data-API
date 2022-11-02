import React from "react";
import CountryCard from "./CountryCard";

import Header from "./Header";
import Filter from "./Filter";
function Countries({ countries, toggle, handleMode, onSelect, onSearch }) {
  return (
    <div className={toggle ? "bg-bg-dark-blue" : "bg-light-gray"}>
      <Header toggle={toggle} handleMode={handleMode} />
      <Filter toggle={toggle} onSelect={onSelect} onSearch={onSearch} />
      <div className="grid grid-cols-4 mx-auto gap-14 px-20">
        {countries.map((c) => {
          return (
            <div className="flex" key={c.name.official}>
              <CountryCard
                toggle={toggle}
                key={c.name.official}
                name={c.name.official}
                flag={c.flags.png}
                population={c.population}
                region={c.region}
                capital={c.capital}
              />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Countries;