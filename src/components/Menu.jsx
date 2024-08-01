import React from "react";

import { IoHome } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { FaSearch, FaCalendar } from "react-icons/fa";

const Menu = () => {
  return (
    <div className="fixed top-4 left-4 rounded-md h-screen w-1/5 bg-primary text-white font-sans p-5">
      <form>
        <div className="relative">
          <FaSearch className="text-secondary absolute left-3 top-2/3 transform -translate-y-1/2" />
          <input
            className="mt-5 w-full text-primary rounded-md p-2 pl-10 bg-tertiary placeholder:text-sm"
            type="text"
            placeholder="Procure hábitos"
          />
        </div>
      </form>

      <div className="mt-5">
        <div className="flex items-center">
          <IoHome className="mt-3 size-7" />
          <a className="ml-2 mt-3" href="/">
            Home
          </a>
        </div>
        <div className="flex items-center mt-5">
          <FaCalendar className="size-7" />
          <a className="ml-2" href="/calendar">
            Calendário
          </a>
        </div>
        <div className="flex items-center mt-5">
          <BiSolidCategory className="size-7" />
          <a className="ml-2" href="/category">
            Categorias
          </a>
        </div>
      </div>

      <div className="mt-5"></div>
    </div>
  );
};

export default Menu;
