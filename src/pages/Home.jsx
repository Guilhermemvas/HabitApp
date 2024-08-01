import React, { useState } from "react";
import HabitList from "../components/HabitList";
import AddHabit from "../components/AddHabit";
import { FaStar } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

const Home = () => {
  const [habits, setHabits] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const addHabit = (habit) => {
    setHabits([...habits, habit]);
    setIsPopupOpen(false); // Fechar o popup após adicionar o hábito
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="bg-secondary flex w-full h-screen">
      <div className="flex-grow rounded-md bg-primary mt-0 p-6 m-4">
        <div>
          <h1 className="text-white mt-4 text-lg">Home</h1>
          <h1 className="text-white text-4xl font-bold">Meus Hábitos</h1>
        </div>
        <div className="my-4">
          <button
            onClick={openPopup}
            className=" flex items-center p-2 bg-green text-white rounded-md transition duration-300 hover:bg-darkgreen"
          >
            <FaStar className="mr-2" /> Criar Hábito
          </button>
        </div>
        <div className="">
          <HabitList habits={habits} />
        </div>
      </div>
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <div className="grid justify-items-stretch">
              <button
                onClick={closePopup}
                className="justify-self-end mb-0 -mr-1 text-red transform duration-200 hover:text-darkred"
              >
                <AiFillCloseCircle />
              </button>
            </div>
            <AddHabit onAddHabit={addHabit} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
