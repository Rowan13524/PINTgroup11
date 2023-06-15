import { React, useState, useEffect } from 'react'

function TodaySchedule() {
  const [appointment, setAppointment] = useState([]);

  // useEffect(() => {
  //   fetchTodaySchedule();
  // }, []);

  // const fetchTodaySchedule = async () => {
  //   try {
  //     const response = await fetch('/api/today-schedule');
  //     const data = await response.json();
  //     setAppointment(data);
  //   } catch (error) {
  //     console.log('Error fetching today schedule:', error);
  //   }
  // };

  useEffect(() => {
    // Fetch fake data
    const fakeData = [
      {
        appointment: 1,
        first_name: 'John',
        last_name: 'Doe',
        Time: '9:00:00',
        Doctor: 'Doctor 1',
        Phone: '11234567890',
      },
      {
        appointment: 2,
        first_name: 'John1',
        last_name: 'Doe1',
        Time: '9:30:00',
        Doctor: 'Doctor 2',
        Phone: '11234567890',
      },
      {
        appointment: 3,
        first_name: 'John2',
        last_name: 'Doe2',
        Time: '10:30:00',
        Doctor: 'Doctor 3',
        Phone: '11234567890',
      }
    ];

    setAppointment(fakeData);
  }, []);
  const today = new Date().toLocaleDateString('pt-BR');

  const todayAppointment = appointment.filter(
    (patient) => new Date().toLocaleDateString('pt-BR') === today
  );

  return (
      <div>
        <h3 className="title py-5 text-xl font-bold">Today Appointment</h3>
        <table className="w-full text-sm text-left bg-gray-200 dark:bg-gray-200 text-gray-500 dark:text-gray-400">
  <thead className="text-s text-center  bg-slate-800 text-gray-200 border-t-4 border-orange-500">
    <tr>
      <th className="py-2 px-4 ">Time</th>
      <th className="py-2 px-4 ">Patient Name</th>
      <th className="py-2 px-4 ">Doctor</th>
      <th className="py-2 px-4 ">Phone</th>
    </tr>
  </thead>
  <tbody>
    {todayAppointment.map((patient) => (
      <tr key={patient.appointment} className=" bg-white text-black border-t-4 dark:border-gray-100">
        <td className="py-2 px-4 bg-orange-500">{patient.Time}</td>
        <td className="py-2 px-4">{`${patient.first_name} ${patient.last_name}`}</td>
        <td className="py-2 px-4">{patient.Doctor}</td>
        <td className="py-2 px-4">{patient.Phone}</td>
      </tr>
    ))}
        </tbody>
        
</table>

      </div>
    );
}


export default TodaySchedule