import "./App.css";
import { Route, Routes } from "react-router-dom";
import AttendanceReport from "./pages/AttendanceReport";
import AttendancePage from "./pages/AttendancePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AttendancePage />} />
        <Route path="/report" element={<AttendanceReport />} />
      </Routes>
    </>
  );
}

export default App;
