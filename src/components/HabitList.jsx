import React, { useState } from 'react';
import { FaEye } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";


const HabitList = ({ habits }) => {
  const [isDetailShow, setIsDetailShow] = useState(false);

  return (
    <div className="text-white">
      <div className="">
        <ul className='grid grid-cols-4 gap-4 mt-10 '>
          {habits.map((habit, index) => (
            <li className=' transform duration-200 mr-3 mb-3 hover:scale-105 cursor-pointer bg-white rounded-md text-center'key={index}>
              <div className="bg-tertiary rounded-md grid justify-items-stretch">
                <button
                 onClick={() => {setIsDetailShow(true)}}
                 className='text-primary justify-self-end -mb-2 mt-2 mr-2 transform duration-150 hover:text-green'><FaEye /></button>
              </div>
              <h1 className='p-3 text-base overflow-hidden text-ellipsis whitespace-nowrap text-secondary font-medium'>{habit.habitName}</h1>
              <h3 className=' bg-green p-2 rounded-md whitespace-nowrap text-sm text-white'>{habit.frequency}</h3>
            </li>
            
          ))}
          {isDetailShow && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-md">
                <div className="grid justify-items-stretch">
                <button
                  onClick={() => {setIsDetailShow(false)}} 
                  className="justify-self-end -mt-3 -mr-3 mb-3 text-red transform duration-200 hover:text-darkred">
                  <AiFillCloseCircle />
                </button>
                </div>
                <h1 className='text-primary'>Detalhes do Hábito</h1>
              </div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HabitList;