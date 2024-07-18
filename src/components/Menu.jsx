import React from "react";
import { FaStar } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";



const Menu = () => {
  return (
    <div className=" text-white font-sans flex flex-col h-screen w-screen">
      <div className="m-4 rounded-md w-1/5 bg-primary items-center p-6 h-full drop-shadow-md">
        <form>
          <div className="relative">
            <FaSearch className="text-secondary absolute left-3 top-2/3 transform -translate-y-1/2" />
            <input
              className="mt-5 w-full rounded-md p-2 pl-10 "
              type="text"
              placeholder="Procure hábitos"
            />
          </div>
          <button
            className="flex items-center justify-center mt-2 w-full rounded-md p-1 bg-green"
            type="submit"
            >
            <FaStar className=" mr-2 " /> Adicionar Hábito
          </button>
        </form>

        <div className="mt-5">
            <div className="flex items-center">
                <IoHome className="size-7" />
                <a className="ml-2"
                href="#">
                    Home
                </a>
            </div>
            <div className="flex items-center mt-5">
                <FaCalendar className="size-7" />
                <a 
                className="ml-2" 
                href="">
                    Calendário
                </a>
            </div>
            <div className="flex items-center mt-5">
                <BiSolidCategory className="size-7" />
                <a 
                className="ml-2" 
                href="">
                    Categorias
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
