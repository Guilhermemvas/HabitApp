import React from 'react';

const HabitList = ({ habits }) => {
  return (
    <div className="text-white">
      <div className="">
        <ul>
          {habits.map((habit, index) => (
            <li key={index}>
              <h1>{habit.habitName}</h1>
              <h3>{habit.frequency}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HabitList;