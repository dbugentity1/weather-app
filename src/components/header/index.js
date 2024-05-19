import React from "react";
import { NavbarToogleButton } from "../../assets/icons";

const menuItems = (
  <div className="menu menu-vertical md:menu-horizontal px-1 dropdown-content z-[10] bg-inherit rounded-md">
    <li>
      <a>Help</a>
    </li>
    <li>
      <a> Sign Out </a>
    </li>
  </div>
);

const Header = () => {
  return (
    <div className="w-full flex justify-between bg-base-100 py-2">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl p-0 !m-0" href="/">Weather.io</a>
      </div>
      <div>
        <div class="w-fit  block md:hidden  text-xl font-medium dropdown dropdown-end">
          <button className="btn ml-auto flex justify-end w-fit hover:bg-white hover:scale-x-110 btn-square btn-ghost">
            <NavbarToogleButton />
          </button>
          <div className="block md:hidden flex-none w-40 bg-slate-200">{menuItems}</div>
        </div>

        <div className="hidden md:block flex-none">{menuItems}</div>
      </div>
    </div>
  );
};

export default Header;
