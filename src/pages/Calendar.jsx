import React from "react";
import { Card } from "react-bootstrap";
import { BsCalendar3 } from "react-icons/bs";

const Calendar = () => (
  <div>
    <h2 className="mb-4">📅 Calendar</h2>
    <Card bg="secondary" text="white" className="shadow text-center">
      <Card.Body>
        <BsCalendar3 size={50} className="mb-3" />
        <Card.Title>Calendar</Card.Title>
        <Card.Text>
          Integrate events, reminders, and date-based data with interactive calendars.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);

export default Calendar;
