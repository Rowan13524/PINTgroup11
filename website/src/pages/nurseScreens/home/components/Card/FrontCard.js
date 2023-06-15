import React from 'react';

import { FaHeartbeat } from 'react-icons/fa';
import { GiLungs } from 'react-icons/gi';
import { WiThermometer } from 'react-icons/wi';
import { GiFalling } from 'react-icons/gi';
import { BsFire } from 'react-icons/bs';
import { GiNightSleep } from 'react-icons/gi';
import './CardStyles.css';
const FrontCard = () => {
  const isFalling = false;
  const isSmoking = false;
  const isSnoring = false;
  return (
    <div className="front-card-container ml-1 mr-1 b">
      <h1 className="text-2xl font-bold">Patient name</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 px-3">
        <div className="flex items-center justify-around">
          <FaHeartbeat className="text-red-700" size={26} />
          <p className="text-lg ml-2">90 bpm</p>
        </div>
        <div className="flex items-center justify-around">
          <GiLungs className="text-green-500" size={30} />
          <p className="text-lg ml-2">93%</p>
        </div>
        <div className="flex items-center justify-around">
          <WiThermometer className="text-blue-600" size={40} />
          <p className="text-lg ml-2">36ºC</p>
        </div>
        <div className="flex items-center justify-around">
          <GiNightSleep className={isSnoring ? 'text-red-600' : 'text-orange-500'} size={28} />
          <p className={`text-lg ml-2 ${isSnoring ? 'text-red-600' : 'text-black-800'}`}>
            {isSnoring ? 'Yes' : 'No'}
          </p>
        </div>
        <div className="flex items-center justify-around">
          <BsFire className={isSmoking ? 'text-red-600' : 'text-yellow-300'} size={28} />
          <p className={`text-lg ml-2 ${isSmoking ? 'text-red-600' : 'text-black-800'}`}>
            {isSmoking ? 'Yes' : 'No'}
          </p>
        </div>
        <div className="flex items-center justify-around">
          <GiFalling className={`text-${isFalling ? 'red' : 'black'}-600`} size={32} />
          <p className={`text-lg ml-2 ${isFalling ? 'text-red-600' : 'text-black-800'}`}>
              {isFalling ? 'Yes' : 'No'}
          </p>
        </div>


      </div>
    </div>



  );
};

export default FrontCard;
