import React from 'react'
import Menu from '../components/Menu'


const Home = () => {
  return (
    <div className="bg-secondary flex w-full h-screen">
      <div className="w-1/5">
        <Menu />
      </div>
      <div className="flex-grow rounded-md bg-primary p-6 ml-8 m-4">
      </div>
    </div>
  );
} 

export default Home