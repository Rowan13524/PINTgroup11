import React from 'react';

const AppointmentForm = ({
  newAppointment,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <div className="appointment-form">
      <h3>Add Appointment</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newAppointment.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="start">Start Date:</label>
          <input
            type="date"
            id="start"
            name="start"
            value={newAppointment.start}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="end">End Date:</label>
          <input
            type="date"
            id="end"
            name="end"
            value={newAppointment.end}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="patient_id">Patient ID:</label>
          <input
            type="text"
            id="patient_id"
            name="patient_id"
            value={newAppointment.patient_id}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="time">Time:</label>
          <input
            type="text"
            id="time"
            name="time"
            value={newAppointment.time}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={newAppointment.location}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="purpose">Purpose:</label>
          <input
            type="text"
            id="purpose"
            name="purpose"
            value={newAppointment.purpose}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
