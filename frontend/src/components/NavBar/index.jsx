import "./navbar.css";
import { Input, Space } from "antd";
const { Search } = Input;

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-left">
          <h2>Student Attendance</h2>
        </div>
        <div className="nav-right">
          <Search placeholder="search" className="search" />
          <i class="fa-regular fa-bell i"></i>
          <i class="fa-solid fa-gear i"></i>
        </div>
      </div>
    </>
  );
};

export default NavBar;
