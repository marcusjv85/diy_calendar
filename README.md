# 📅 React Calendar + Todo App

A sleek, modern calendar and task manager built with React. This project combines a dynamic calendar UI with a fully functional to-do/event system — allowing you to add, view, and manage events day by day.

![screenshot](./preview.png) <!-- Optional: replace with your actual screenshot path -->

---

## ✨ Features

- ✅ Clickable calendar grid with month & year navigation
- ✅ Add events with title, description, time, and date
- ✅ View all events for a selected day
- ✅ Mark tasks as complete with confirmation
- ✅ Smooth UI animations and responsive layout
- ✅ Modular component structure (Calendar, Form, Todo List, Modal)
- ✅ Local state management (SQLite coming soon!)

---

## 📦 Tech Stack

- **Frontend:** React (Functional Components + Hooks)
- **Styling:** Pure CSS (No frameworks)
- **State Management:** React `useState` hooks
- **Animations:** Pure CSS transitions
- **Data Persistence:** Coming soon → **SQLite** integration for persistent storage

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/react-calendar-todo.git
cd react-calendar-todo
```
### 2. Install dependencies
```bash
npm install
```
### 3. Run the app
```bash
npm start
```
The app will run at: http://localhost:3000

## 📚 File Structure
```css
src/
│
├── components/
│   ├── Calendar.jsx
│   ├── AddEventForm.jsx
│   ├── TodoList.jsx
│   ├── ConfirmationModal.jsx
│   └── Element.jsx
│
├── App.js
├── App.css
└── index.js
```
## 💾 Coming Soon
* ✅ Persistent data saving with SQLite

* 📤 Export/Import events

* 📆 Custom calendar popups for date picking

* 🔄 Sync with external calendar APIs (Google Calendar)

## 🧠 Author
Marcus Vialva
📧 marcusjv85@gmail.com

## 📝 License
This project is licensed under the MIT License.
