import React from 'react';
import Banner from './components/Banner';
import Workouts from './components/Workouts';

const HomePage = () => {
  return (
    <main className="min-h-screen bg-[#15171d] text-white"> 
    <Banner></Banner>
    <Workouts></Workouts>
     </main>
  );
};

export default HomePage;