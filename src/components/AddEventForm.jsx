import React, { useState } from "react";
import "./AddEventForm.css";

function AddEventForm({ selectedDate, onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState(selectedDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !time) return;

    onSave({
      title,
      description,
      time,
      date: date.toDateString(),

      completed: false,
    });

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Event</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Date:
            <input
              type="date"
              value={date.toISOString().split("T")[0]}
              onChange={(e) => {
                const [year, month, day] = e.target.value.split("-");
                const localDate = new Date(year, month - 1, day); // Local date at midnight
                setDate(localDate);
              }}
              required
            />
          </label>

          <label>
            Time:
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </label>

          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>

          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
            />
          </label>

          <div className="form-actions">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose} className="cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEventForm;
