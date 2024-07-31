import React from 'react';

const HabitList = ({ habits }) => {
  return (
    <div className="text-white">
      <div className="">
        <ul className='grid grid-cols-4 gap-4 mt-10 '>
          {habits.map((habit, index) => (
            <li className=' transform duration-200 mr-3 mb-3 hover:scale-105 cursor-pointer bg-white rounded-md text-center'key={index}>
              <h1 className='p-3 text-2xl text-secondary font-medium'>{habit.habitName}</h1>
              <h3 className=' bg-green p-2 rounded-md  text-white'>{habit.frequency}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HabitList;