import React from 'react';
import { GrContactInfo } from 'react-icons/gr';
import { GiSmartphone } from 'react-icons/gi';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import './CardStyles.css';

const BackCard = () => {
  const patientInfo = {
    age: 35,
    email: "487272@student.saxion.nl",
    phone: "123-456-7890",
  };

  return (
    <div className="back">
      <h1 className="text-2xl font-bold mb-4">Patient Name</h1>
      <div className="data-container">
        <div className="grid grid-cols-3 gap-1 px-3 ml-4 mr-8">
          <div className="flex items-center col-span-1">
            <GrContactInfo className="text-gray-800" size={30} title="Age" />
          </div>
          <p className="col-span-2 text-md">{patientInfo.age}</p>
          <div className="flex items-center col-span-1">
            <MdOutlineAlternateEmail className="text-red-600" size={30} title="Email" />
          </div>
          <p className="col-span-2">{patientInfo.email}</p>
          <div className="flex items-center col-span-1">
            <GiSmartphone className="text-blue-500" size={30} title="Phone" />
          </div>
          <p className="col-span-2">{patientInfo.phone}</p>
      
        </div>
      </div>
    </div>
  );
};

export default BackCard;
