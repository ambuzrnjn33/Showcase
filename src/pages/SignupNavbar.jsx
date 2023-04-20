import React from "react";
import { NavLink } from "react-router-dom";

const SignupNavbar = () => {
  return (
    <>
      <ul className="flex justify-evenly">
        <li>
          <NavLink
            to="/signup"
            end
            className={({ isActive }) =>
              `px-5 py-2 md:text-xl font-bold relative before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:bg-[#FFC040] after:absolute after:left-0 after:-bottom-1 after:h-3 after:w-3 after:bg-[#FFC040] after:rounded-full ${
                isActive
                  ? "before:block after:block text-[#FFC040]"
                  : "before:hidden after:hidden text-[#8F9492]"
              }`
            }
          >
            Client
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup/vendor"
            end
            className={({ isActive }) =>
              `px-5 py-2 md:text-xl font-bold relative before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-full before:bg-[#FFC040] after:absolute after:left-0 after:-bottom-1 after:h-3 after:w-3 after:bg-[#FFC040] after:rounded-full ${
                isActive
                  ? "before:block after:block text-[#FFC040]"
                  : "before:hidden after:hidden text-[#8F9492]"
              }`
            }
          >
            Vendor
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default SignupNavbar;
