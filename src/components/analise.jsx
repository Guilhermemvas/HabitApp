import React, { useState } from 'react';
import PopupForm from './PopupForm';

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleAddHabit = (newHabit) => {
    setHabits([...habits, newHabit]);
    setIsPopupVisible(false); // Fecha o pop-up após adicionar o hábito
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gerenciador de Hábitos</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={togglePopup}>
        {isPopupVisible ? 'Fechar' : 'Adicionar Hábito'}
      </button>
      {isPopupVisible && (
        <div className="relative">
          <div className="absolute top-12 left-0 bg-white p-4 rounded shadow-lg z-10">
            <PopupForm onAddHabit={handleAddHabit} />
          </div>
        </div>
      )}
      <ul className="mt-4">
        {habits.map((habit, index) => (
          <li key={index} className="border-b py-2">{habit.habitName} - {habit.frequency}</li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracker;
