import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './patientListStyles.css';
import Navbar from '../../../components/navigation/nurseNavbar/Navbar';
import Header from '../../../components/Header/Header'

const page = "/patient-list/patient-detail"
const PatientListScreen = () => {
  const [patients, setPatients] = useState([
    {
      patient_id: 1,
      first_name: 'John',
      last_name: 'Doe',
      date_of_birth: '1990-01-01',
      gender: 'Male',
      contact_number: '1234567890',
      address: '123 ABC Street',
      email: 'john.doe@example.com',
    },
    {
        patient_id: 2,
        first_name: 'John1',
        last_name: 'Doe1',
        date_of_birth: '1990-02-02',
        gender: 'Male',
        contact_number: '11234567890',
        address: '1123 ABC Street',
        email: '1john.doe@example.com',
    },
    {
        patient_id: 3,
        first_name: 'John2',
        last_name: 'Doe2',
        date_of_birth: '1990-11-11',
        gender: 'Male',
        contact_number: '1234567890',
        address: '123 ABC Street',
        email: 'john.doe@example.com',
      },
      {
          patient_id: 4,
          first_name: 'John1',
          last_name: 'Doe1',
          date_of_birth: '1990-02-02',
          gender: 'Male',
          contact_number: '11234567890',
          address: '1123 ABC Street',
          email: '1john.doe@example.com',
      },
      {
        patient_id: 5,
        first_name: 'John',
        last_name: 'Doe',
        date_of_birth: '1990-01-01',
        gender: 'Male',
        contact_number: '1234567890',
        address: '123 ABC Street',
        email: 'john.doe@example.com',
      },
      {
          patient_id: 6,
          first_name: 'John1',
          last_name: 'Doe1',
          date_of_birth: '1990-02-02',
          gender: 'Male',
          contact_number: '11234567890',
          address: '1123 ABC Street',
          email: '1john.doe@example.com',
      },
      {
        patient_id: 7,
        first_name: 'John',
        last_name: 'Doe',
        date_of_birth: '1990-01-01',
        gender: 'Male',
        contact_number: '1234567890',
        address: '123 ABC Street',
        email: 'john.doe@example.com',
      },
      {
          patient_id: 8,
          first_name: 'John1',
          last_name: 'Doe1',
          date_of_birth: '1990-02-02',
          gender: 'Male',
          contact_number: '11234567890',
          address: '1123 ABC Street',
          email: '1john.doe@example.com',
      },
      {
        patient_id: 9,
        first_name: 'John',
        last_name: 'Doe',
        date_of_birth: '1990-01-01',
        gender: 'Male',
        contact_number: '1234567890',
        address: '123 ABC Street',
        email: 'john.doe@example.com',
      },
      {
          patient_id: 10,
          first_name: 'John1',
          last_name: 'Doe1',
          date_of_birth: '1990-02-02',
          gender: 'Male',
          contact_number: '11234567890',
          address: '1123 ABC Street',
          email: '1john.doe@example.com',
      }
    // Add more patient data objects here...
  ]);
  const [sortColumn, setSortColumn] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSort = (column) => {
    if (column === sortColumn) {
      // If the same column is clicked again, reverse the sort order
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Sort by a different column in ascending order by default
      setSortColumn(column);
      setSortOrder('asc');
    }
  };
  
  // Apply sorting and filtering to the patient list
  let sortedPatients = [...patients];
  if (sortColumn) {
    sortedPatients.sort((a, b) => {
      const columnA = a[sortColumn];
      const columnB = b[sortColumn];
      if (columnA < columnB) return sortOrder === 'asc' ? -1 : 1;
      if (columnA > columnB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }  

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredPatients = sortedPatients.filter((patient) =>
    Object.values(patient)
      .join(' ')
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const nav = useNavigate();
  const handleClick = () => {
    nav(page);
  }

  return (
    <div className="container-patient-list">
      <div className="navbar1">
        <Navbar />
      </div>
      <div className="patient-list-header">
        <Header name="PATIENT LIST" />

      </div>
      <div className="patient-list-table-container ">
        <div>
          <input
            className="w-1/3 py-2 pl-12 pr-4 text-gray-700 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-orange-600 focus:ring-2 focus:ring-orange-600"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            
          />
        </div>
        <div className="table-patient-container text-center ">
          <table className="table-fixed w-full border rounded-md shadow-md shadow-gray-400">
            <thead className=" bg-slate-900 text-white font-bold text-xs sticky top-0">
              <tr >
                <th
                  className="cursor-pointer py-2 px-4 w-1/12 "
                  onClick={() => handleSort('patient_id')}
                >
                  ID{' '}
                  {sortColumn === 'patient_id' && sortOrder === 'asc' && '▲'}
                  {sortColumn === 'patient_id' && sortOrder === 'desc' && '▼'}
                </th>
                <th
                  className="cursor-pointer py-2 px-4 w-2/12"
                  onClick={() => handleSort('first_name')}
                >
                  First Name{' '}
                  {sortColumn === 'first_name' && sortOrder === 'asc' && '▲'}
                  {sortColumn === 'first_name' && sortOrder === 'desc' && '▼'}
                </th>
                <th
                  className="cursor-pointer py-2 px-4 w-2/12"
                  onClick={() => handleSort('last_name')}
                >
                  Last Name{' '}
                  {sortColumn === 'last_name' && sortOrder === 'asc' && '▲'}
                  {sortColumn === 'last_name' && sortOrder === 'desc' && '▼'}
                </th>
                <th
                  className="cursor-pointer py-2 px-4 w-2/12"
                  onClick={() => handleSort('date_of_birth')}
                >
                  Date of Birth{' '}
                  {sortColumn === 'date_of_birth' && sortOrder === 'asc' && '▲'}
                  {sortColumn === 'date_of_birth' && sortOrder === 'desc' && '▼'}
                </th>
                <th
                  className="cursor-pointer py-2 px-4 w-1/12"
                  onClick={() => handleSort('gender')}
                >
                  Gender{' '}
                  {sortColumn === 'gender' && sortOrder === 'asc' && '▲'}
                  {sortColumn === 'gender' && sortOrder === 'desc' && '▼'}
                </th>
                <th
                  className="cursor-pointer py-2 px-4 w-2/12"
                  onClick={() => handleSort('contact_number')}
                >
                  Phone{' '}
                  {sortColumn === 'contact_number' && sortOrder === 'asc' && '▲'}
                  {sortColumn === 'contact_number' && sortOrder === 'desc' && '▼'}
                </th>
                <th
                  className="cursor-pointer py-2 px-4 w-3/12"
                  onClick={() => handleSort('address')}
                >
                  Address{' '}
                  {sortColumn === 'address' && sortOrder === 'asc' && '▲'}
                  {sortColumn === 'address' && sortOrder === 'desc' && '▼'}
                </th>
                <th
                  className="cursor-pointer py-2 px-4 w-3/12"
                  onClick={() => handleSort('email')}
                >
                  Email{' '}
                  {sortColumn === 'email' && sortOrder === 'asc' && '▲'}
                  {sortColumn === 'email' && sortOrder === 'desc' && '▼'}
                </th>
                <th className="py-2 px-4 w-2/12">Medication</th>
              </tr>
            </thead>
            <tbody className = "bg-slate-800 text-white text-xs">
              {filteredPatients.length > 0 ? (
                filteredPatients.map((patient) => (
                  <tr key={patient.patient_id}>
                    <td className="py-2 px-4">{patient.patient_id}</td>
                    <td className="py-2 px-4">{patient.first_name}</td>
                    <td className="py-2 px-4">{patient.last_name}</td>
                    <td className="py-2 px-4">{patient.date_of_birth}</td>
                    <td className="py-2 px-4">{patient.gender}</td>
                    <td className="py-2 px-4">{patient.contact_number}</td>
                    <td className="py-2 px-4">{patient.address}</td>
                    <td className="py-2 px-4">{patient.email}</td>
                    <td className="py-2 px-4">
                      <button
                        class="text-white bg-gradient-to-br from-pink-600 to-orange-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-white dark:focus:ring-pink-600 font-medium rounded-lg text-xs px-2 py-2 text-center mr-2 mb-2"
                        onClick={handleClick}
                        >
                        Details
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center py-4">
                    <h2 className="text-gray-200 text-sm">No patients found.</h2>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
  </div>


  );
};

export default PatientListScreen;