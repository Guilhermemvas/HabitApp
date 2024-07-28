import React, { useState } from 'react';

const AddHabit = ({ onAddHabit }) => {
  const [habitName, setHabitName] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName && frequency) {
      onAddHabit({ habitName, frequency });
      setHabitName('');
      setFrequency('');
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="text-secondary text-xl text-center font-bold">
          <h1>Crie Seu Hábito</h1>
        </div>
      </div>
      <div className="flex">
        <form onSubmit={handleSubmit} className="grid justify-items-start">
          <input
            type="text"
            placeholder="Nome do Hábito"
            value={habitName}
            onChange={(e) => setHabitName(e.target.value)}
            className="p-2 placeholder:text-sm rounded-md mt-3 mb-2 bg-tertiary text-primary"
          />
          <input
            type="text"
            placeholder="Frequência. Ex: Todo dia"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="p-2 placeholder:text-sm rounded-md mb-2 bg-tertiary text-primary"
          />
          <button
            type="submit"
            className="p-1 bg-green w-full text-white rounded-md transition duration-300 hover:bg-darkgreen"
          >
            Adicionar Hábito
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddHabit;
