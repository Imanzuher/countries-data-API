import React from "react";
import CountryCard from "./CountryCard";

import Header from "./Header";
import Filter from "./Filter";
function Countries({
  countries,
  toggle,
  handleMode,
  onSelect,
  onSearch,
  isLoading,
  error,
  countriesRef,
  searchCountries,
  hi,
}) {
  console.log("hii:", hi);
  return (
    <div className={toggle ? "bg-bg-dark-blue " : "bg-light-gray "}>
      <Header toggle={toggle} handleMode={handleMode} />
      <Filter
        toggle={toggle}
        onSelect={onSelect}
        onSearch={onSearch}
        countriesRef={countriesRef}
        searchCountries={searchCountries}
      />
      <div className="grid grid-cols-4 gap-14 desktop:mx-auto desktop:gap-14 desktop:pr-14 desktop:px-5  mobile:grid-cols-1 mobile:px-6 mobile:mx-4  tablet_1:grid-cols-2 tablet_1:mx-auto tablet_1:pl-3 tablet_1:pr-8 tablet_2:grid-cols-2 tablet_2:px-12 tablet_3:grid-cols-3 tablet_3:gap-8 tablet_3:px-6 ">
        {isLoading && !error && (
          <h4 className="text-2xl font-bold"> Loading........</h4>
        )}
        {error && !isLoading && <h4>{error}</h4>}
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
                hi={hi}
              />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Countries;
