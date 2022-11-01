import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
function Header({ toggle, handleMode }) {
  return (
    <div
      className={
        toggle
          ? "bg-mode-dark-blue flex justify-between py-5 px-20 font-nunito text-el-white shadow-md"
          : "bg-el-white flex justify-between py-5 px-20 font-nunito shadow-md"
      }
    >
      <h1 className="text-2xl font-extrabold ">Where in the world?</h1>
      <button type="button" className="text-base" onClick={handleMode}>
        {toggle ? (
          <FontAwesomeIcon icon={faSun} className="w-5 h-5 mr-2" />
        ) : (
          <FontAwesomeIcon icon={faMoon} className="w-5 h-5 mr-2" />
        )}
        {toggle ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default Header;
