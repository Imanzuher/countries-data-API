import React from "react";

function Filter({ toggle, onSelect, countriesRef, searchCountries }) {
  function selectHandler(e) {
    console.log(e.target.value);
    onSelect(e.target.value);
  }
  return (
    <div
      className={
        toggle
          ? "flex justify-between px-20 py-12 bg-bg-dark-blue mobile:flex-col mobile:px-6 mobile:py-6 mobile:gap-10"
          : "flex justify-between px-20 py-12 bg-light-gray mobile:flex-col mobile:px-6 mobile:py-6 mobile:gap-10"
      }
    >
      <div className="w-96">
        <input
          class={
            toggle
              ? "appearance-none shadow-sm  w-full bg-mode-dark-blue text-el-white border focus:outline-offset-1 focus:outline-black rounded-md py-3 px-6  leading-tight focus:outline-none mobile:w-80 mobile:border-none desktop:border-none"
              : "appearance-none shadow-sm w-full bg-el-white text-dark-gray border focus:outline-offset-1 focus:outline-black rounded-md py-3 px-6  leading-tight focus:outline-none mobile:w-80 mobile:border-none desktop:border-none "
          }
          id="grid-first-name"
          type="text"
          placeholder="&#xF002;    Search for a country...."
          ref={countriesRef}
          onChange={searchCountries}
        />
      </div>
      <div class="inline-block relative w-52 mobile:w-44">
        <select
          class={
            toggle
              ? "appearance-none w-full bg-mode-dark-blue border text-el-white  hover:border-gray-500 px-4 py-3  rounded shadow leading-tight focus:outline-none focus:shadow-outline mobile:text-sm mobile:border-none desktop:border-none"
              : "appearance-none w-full bg-el-white border text-dark-gray  hover:border-gray-500 px-4 py-3  rounded shadow leading-tight focus:outline-none focus:shadow-outline mobile:text-sm mobile:border-none desktop:border-none"
          }
          onChange={selectHandler}
        >
          <option className="text-sm ">Filter by Region</option>
          <option className="text-sm " value="Africa">
            Africa
          </option>
          <option className="text-sm " value="America">
            America
          </option>
          <option className="text-sm " value="Asia">
            Asia
          </option>
          <option className="text-sm " value="Europe">
            Europe
          </option>
          <option className="text-sm " value="Oceania">
            Oceania
          </option>
        </select>
        <div
          class={
            toggle
              ? "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-el-white"
              : "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-dark-gray"
          }
        >
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Filter;
