import { useState } from "react";
import "./App.css";
import Calendar from "./components/Calendar";
import AddEventForm from "./components/AddEventForm";
import logo from "./planr.png"; // make sure the path is correct
import TodoList from "./components/TodoList";

function App() {
  const [currentDay, setCurrentDay] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [showForm, setShowForm] = useState(false);

  const handleSaveEvent = (newEvent) => {
    const dateKey = newEvent.date;

    setEvents((prevEvents) => {
      const updatedEvents = prevEvents[dateKey]
        ? [...prevEvents[dateKey], newEvent]
        : [newEvent];
      return { ...prevEvents, [dateKey]: updatedEvents };
    });

    // 🔥 Update selectedDate to match the form-chosen date
    setSelectedDate(new Date(dateKey));
  };

  const handleToggleComplete = (dateKey, item) => {
    setEvents((prev) => {
      const updated = prev[dateKey].map((ev) =>
        ev === item ? { ...ev, completed: true } : ev
      );
      return { ...prev, [dateKey]: updated };
    });
  };

  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Planr logo" />
        </div>
        <h1>📆 My React Calendar + Todo</h1>
        <button onClick={() => setShowForm(true)}>Add Event</button>
      </div>

      <div className="main-content">
        <Calendar
          currentDay={currentDay}
          setCurrentDay={setCurrentDay}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          events={events}
        />

        <TodoList
          selectedDate={selectedDate}
          events={events}
          onToggleComplete={handleToggleComplete}
        />
      </div>

      {showForm && (
        <AddEventForm
          selectedDate={selectedDate}
          onClose={() => setShowForm(false)}
          onSave={handleSaveEvent}
        />
      )}
    </div>
  );
}

export default App;
