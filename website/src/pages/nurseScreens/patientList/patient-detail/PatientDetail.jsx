import React from 'react';
import Navbar from '../../../../components/navigation/nurseNavbar/Navbar';
import Header from '../../../../components/Header/Header';
import './patientDetail.css';

const PatientDetail = () => {
  const patient = {
    id: 1,
    name: 'John Doe',
    dob: 11 - 11 - 1975,
    age: 30,
    gender: 'Male',
    contact: '+1234567890',
    email: 'johndoe@example.com',
    medical_history: 'diabetes',
    intake: '30-04-2022',
  };

  const relative = {
    emg_contact: 'Rachel',
    relationship: 'Wife',
    contact: '+1234567890',
  };

  const appointments = [
    {
      date: '2023-06-10',
      memo: 'appointment memo appointment memo appointment memo appointment memo appointment memo appointment memo',
      medication: [
        { id: 1, name: 'Medication 1', dosage: '2 tablets daily' },
        { id: 2, name: 'Medication 2', dosage: '1 tablet before meal' },
      ],
    },
    {
      date: '2023-06-11',
      memo: 'appointment memo',
      medication: [
        { id: 3, name: 'Medication 3', dosage: '3 times a day' },
        { id: 4, name: 'Medication 4', dosage: '1 capsule at bedtime' },
      ],
    },
    {
      date: '2023-06-11',
      memo: 'appointment memo',
      medication: [
        { id: 3, name: 'Medication 3', dosage: '3 times a day' },
        { id: 4, name: 'Medication 4', dosage: '1 capsule at bedtime' },
      ],
    },
    {
      date: '2023-06-11',
      memo: 'appointment memo',
      medication: [
        { id: 3, name: 'Medication 3', dosage: '3 times a day' },
        { id: 4, name: 'Medication 4', dosage: '1 capsule at bedtime' },
      ],
    },
    {
      date: '2023-06-11',
      memo: 'appointment memo',
      medication: [
        { id: 3, name: 'Medication 3', dosage: '3 times a day' },
        { id: 4, name: 'Medication 4', dosage: '1 capsule at bedtime' },
      ],
    },
    {
      date: '2023-06-11',
      memo: 'appointment memo',
      medication: [
        { id: 3, name: 'Medication 3', dosage: '3 times a day' },
        { id: 4, name: 'Medication 4', dosage: '1 capsule at bedtime' },
      ],
    },
  ];

  return (
    <div className="container-patient-detail">
      <div className="detail-navbar">
        <Navbar />
      </div>
      <div className="detail-header">
        <Header name="PATIENT DETAIL" />
      </div>
      <div className="content-detail">
        <div className="left-half">
          {/* Personal Information */}
          <div className="bg-slate-100/70 border-t-8 border-orange-500 border-solid rounded-md shadow-md p-4 mb-3">
            <h2 className="text-lg font-bold float-left ml-3 mt-3">Personal Information</h2>
            <table className="w-full text-sm ml-3 mt-3 mb-3 text-left text-black">
              <tbody>
                <tr>
                  <td className="py-2 pr-4">Name:</td>
                  <td>{patient.name}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Age:</td>
                  <td>{patient.age}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Gender:</td>
                  <td>{patient.gender}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Contact:</td>
                  <td>{patient.contact}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Email:</td>
                  <td>{patient.email}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Enroll date:</td>
                  <td>{patient.intake}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Medical history:</td>
                  <td>{patient.medical_history}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Relatives */}
          <div className="bg-slate-100/70 border-t-8 border-orange-500 border-solid rounded-md shadow-md p-4 mb-3">
            <h2 className="text-lg font-bold float-left ml-3 mt-3">Emergency Contact</h2>
            <table className="w-full text-sm ml-3 mt-3 mb-3 text-left text-black">
              <tbody>
                <tr>
                  <td className="py-2 pr-2">Name:</td>
                  <td>{relative.emg_contact}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-2">Relationship:</td>
                  <td>{relative.relationship}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-2">Contact:</td>
                  <td>{relative.contact}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="right-half">
          {/* Appointments */}
          <div className="appointment-card grid grid-cols-1 md:grid-cols-2 gap-4">
            {appointments.map((appointment, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-300 rounded-md shadow-md p-4"
              >
                <div className="mb-4">
                  <h3 className="text-orange-500 text-l font-bold">Date: {appointment.date}</h3>
                </div>
                <div>
                  <p className="text-white text-s font-mono">{appointment.memo}</p>
                  <h4 className="text-cyan-500 text-lg font-medium mt-2">Medication:</h4>
                  <ul className="text text-white list-disc list-inside pl-4 py-1">
                    {appointment.medication.map((medication) => (
                      <li key={medication.id} className="font-mono text-sm">
                        {medication.name} - {medication.dosage}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetail;
