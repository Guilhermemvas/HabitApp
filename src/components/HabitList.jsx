import React, { useState } from 'react';
import AddHabit from './AddHabit';

const HabitList = () => {

  const [habit, setHabit] = useState([]);


  return (
    <div className='text-white'>HabitList</div>
  )
}

export default HabitList