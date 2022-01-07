import React, { useState } from 'react';

const appointmentTimeOfDay = startsAt => {
  const [h, m] = new Date(startsAt).toTimeString().split(':');

  return `${h}:${m}`;
}

export const Appointment = ({ customer }) => (
  <div>{customer.firstName}</div>
);

export const AppointmentsDayView = ({ appointments }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(0);

  return (
    <div id="appointmentsDayView">
      <ol id="appointments">
        {appointments.map((appointment, idx) => (
          <li key={appointment.startsAt}>
            <button type="button" onClick={() => setSelectedAppointment(idx)}>
            {appointmentTimeOfDay(appointment.startsAt)}
            </button>
          </li>))
        }
      </ol>
      {appointments.length === 0 ? (
        <div id="appointmentsDayView">
          <p>There are no appointments scheduled for today.</p>
        </div>
      ) : (
        <Appointment {...appointments[selectedAppointment]} />
      )}
    </div>
  );
};