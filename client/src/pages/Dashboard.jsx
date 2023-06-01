import React from 'react';
import CompletedProjects from '../components/CompletedProjects';
import CurrentProjects from '../components/CurrentProjects';
import { RiAddLine } from 'react-icons/ri';

const Dashboard = () => {
  return (
    <div className="w-full h-full md:h-[80vh]">
      <h1 className="text-4xl font-semibold text-indigo-500 text-center">Welcome User!</h1>
      <div className='flex justify-center'>
      <button
        className="bg-indigo-500 text-white py-2 px-4 mt-4 rounded"
      >
        <RiAddLine className="inline-block mr-2" />
        Add Project
      </button>
      </div>
      <div className='pt-2'>
        <h2 className='text-xl font-semibold text-center text-indigo-400'>Current Projects:</h2>
        <CurrentProjects/>
        <h2 className='text-xl font-semibold text-center text-indigo-400'> Completed Projects:</h2>
        <CompletedProjects/>
      </div>
    </div>
    
  );
}

export default Dashboard;
