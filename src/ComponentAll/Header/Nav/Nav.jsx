import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between items-center mt-4">
      <div>
        <img className="" src="../../../../public/media/Logo.png" alt="" />
      </div>
      <div className="text-lg font-normal mt-4 sm:mt-0 md:mt-0 lg:mt-0">
        <ul className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline font-semibold"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline font-semibold"
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline font-semibold"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

