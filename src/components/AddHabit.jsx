import React, { useState } from 'react';

const AddHabit = ({ onAddHabit }) => {
  const [habitName, setHabitName] = useState('');
  const [frequency, setFrequency] = useState('');
  const [isButtonShow, setIsButtonShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName && frequency) {
      onAddHabit({ habitName, frequency });
      setHabitName('');
      setFrequency('');
      setIsButtonShow(true);
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

          <select
          className='w-full mb-3 text-center rounded-md border-2 border-tertiary p-1'
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}>
            <option value="">Selecione a frequência</option>
            <option value= "Todos os Dias">Todos os Dias</option>
            <option value= "Uma Vez na Semana">Uma Vez na Semana</option>
            <option value= "Uma Vez no Mês">Uma Vez no Mês</option>
            <option value= "A Cada 15 Dias">A Cada 15 Dias</option>
            <option value= "Dias Alternados">Dias Alternados</option>
          </select>

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
