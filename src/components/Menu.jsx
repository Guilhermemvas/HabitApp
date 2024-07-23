import React from "react";
import { FaStar, FaSearch, FaCalendar } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";


const Menu = () => {


  return (
    <div className="fixed top-4 left-4 rounded-md h-screen w-1/5 bg-primary text-white font-sans p-5">
      <form>
        <div className="relative">
          <FaSearch className="text-secondary absolute left-3 top-2/3 transform -translate-y-1/2" />
          <input
            className="mt-5 w-full text-primary rounded-md p-2 pl-10  bg-tertiary placeholder:text-md"
            type="text"
            placeholder="Procure hábitos"
          />
        </div>
        <button
          className="flex bg-green items-center justify-center mt-2 w-full rounded-md p-1 transition duration-300 hover:bg-darkgreen"
          type="submit"
        >
          <FaStar className="mr-2" /> Adicionar Hábito
        </button>
      </form>

      <div className="mt-5">
        <div className="flex items-center">
          <IoHome className="mt-3 size-7" />
          <a className="ml-2" href="/">
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
    </div>
  );
};



export default Menu;
