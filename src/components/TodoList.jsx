import React, { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
import "./TodoList.css";

function TodoList({ selectedDate, events, onToggleComplete }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const dateKey = selectedDate.toDateString();
  const todos = events[dateKey] || [];

  const handleCheckboxClick = (item) => {
    setSelectedItem(item);
    setShowConfirm(true);
  };

  const confirmToggle = (confirm) => {
    if (confirm && selectedItem) {
      onToggleComplete(dateKey, selectedItem);
    }
    setShowConfirm(false);
    setSelectedItem(null);
  };

  return (
    <div className="todo-list">
      <h2>Events on {dateKey}</h2>
      {todos.length === 0 ? (
        <p className="nothing">Nothing for this day</p>
      ) : (
        <ul>
          {todos.map((item, idx) => (
            <li
              key={idx}
              className={`${item.completed ? "done" : "new-item"}`}
              onClick={() => handleCheckboxClick(item)}
            >
              <input
                type="checkbox"
                checked={item.completed}
                disabled={item.completed}
              />
              <div className="info">
                <strong>
                  {item.time} - {item.title}
                </strong>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {showConfirm && (
        <ConfirmationModal
          message="Mark this item as completed?"
          onConfirm={confirmToggle}
        />
      )}
    </div>
  );
}

export default TodoList;
