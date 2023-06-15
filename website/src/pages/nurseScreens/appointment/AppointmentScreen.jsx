import React, { useEffect, useState } from 'react';
import './appointmentStyles.css';
import Navbar from '../../../components/navigation/nurseNavbar/Navbar';
import Header from '../../../components/Header/Header';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

const AppointmentScreen = () => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    const calendarEl = document.getElementById('calendar');

    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, listPlugin, googleCalendarPlugin],
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,listYear',
      },
      displayEventTime: false, // don't show the time column in list view
      events: [
        {
          title: 'Appointment 1',
          start: '2023-05-29',
          end: '2023-05-30',
          patient_id: 'P001',
          time: '10:00 AM',
          location: 'Hospital A',
          purpose: 'Check-up',
        },
        {
          title: 'Appointment 2',
          start: '2023-05-29',
          end: '2023-05-30',
          patient_id: 'P001',
          time: '10:00 AM',
          location: 'Hospital B',
          purpose: 'Check-up',
        },
        {
          title: 'Appointment 3',
          start: '2023-06-01',
          end: '2023-06-03',
          patient_id: 'P002',
          time: '2:30 PM',
          location: 'Clinic B',
          purpose: 'Follow-up',
        },
        // Add more appointment objects here...
      ],
      eventClick: function (info) {
        const appointment = info.event.extendedProps;
        setSelectedAppointment(appointment);
      },
      titleFormat: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      },
    });

    calendar.render();

    return () => {
      calendar.destroy();
    };
  }, []);

  return (
    <div className="container-appointment">
      <div className="appointment-navbar">
        <Navbar />
      </div>
      <div className="appointment-header">
        <Header name="Appointment" />
      </div>
      <div className="appointment-container">
        <div id="calendar" className="calendar-resize"></div>
        {selectedAppointment && (
          <div className="appointment-details">
            <h3>Appointment Details</h3>
            <p>
              <strong>Patient ID:</strong> {selectedAppointment.patient_id}
            </p>
            <p>
              <strong>Time:</strong> {selectedAppointment.time}
            </p>
            <p>
              <strong>Location:</strong> {selectedAppointment.location}
            </p>
            <p>
              <strong>Purpose:</strong> {selectedAppointment.purpose}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentScreen;