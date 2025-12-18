import { useState } from "react";


function App() {
  const [students, setStudents] = useState([
    { name: "Alice", present: false },
    { name: "Bob", present: false },
    { name: "Charlie", present: false },
    { name: "David", present: false },
    { name: "Emma", present: false },
  ]);

  const toggleAttendance = (index) => {
    const updatedStudents = [...students];
    updatedStudents[index].present = !updatedStudents[index].present;
    setStudents(updatedStudents);
  };

  const presentCount = students.filter(s => s.present).length;
  const absentCount = students.length - presentCount;

  return (
    <div className="app">
      <div className="card">
        <h1>📋 Attendance Tracker</h1>

        <div className="stats">
          <div className="present">Present: {presentCount}</div>
          <div className="absent">Absent: {absentCount}</div>
        </div>

        <ul>
          {students.map((student, index) => (
            <li key={index}>
              <span>{student.name}</span>
              <button
                className={student.present ? "btn-present" : "btn-absent"}
                onClick={() => toggleAttendance(index)}
              >
                {student.present ? "Present" : "Absent"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
