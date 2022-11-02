import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
function Header({ toggle, handleMode }) {
  const navigate = useNavigate();
  return (
    <div
      className={
        toggle
          ? "bg-mode-dark-blue flex justify-between py-5 px-20 font-nunito text-el-white shadow-md mobile:py-5 mobile:px-6"
          : "bg-el-white flex justify-between py-5 px-20 font-nunito shadow-md mobile:py-5 mobile:px-6 "
      }
    >
      <h1
        className="text-2xl font-extrabold mobile:text-lg cursor-pointer"
        onClick={() => navigate("/")}
      >
        Where in the world?
      </h1>
      <button
        type="button"
        className="text-base mobile:text-sm"
        onClick={handleMode}
      >
        {toggle ? (
          <FontAwesomeIcon
            icon={faSun}
            className="w-5 h-5 mr-2 mobile:w-4 mobile:h-4"
          />
        ) : (
          <FontAwesomeIcon
            icon={faMoon}
            className="w-5 h-5 mr-2 mobile:w-4 mobile:h-4"
          />
        )}
        {toggle ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default Header;
