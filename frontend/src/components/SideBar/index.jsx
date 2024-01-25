import "./sidebar.css";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <img src="logoipsum.svg" alt="" />
        <div className="side-bottom">
          <p>
            <i class="fa-solid fa-table-cells-large icon"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;Menu 1
          </p>
          <p>
            <i class="fa-regular fa-user icon"></i>&nbsp;&nbsp;&nbsp;&nbsp;Menu
            2
          </p>
          <p>
            <i class="fa-solid fa-arrow-right-arrow-left icon"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;Menu 3
          </p>
          <p>
            <i class="fa-regular fa-rectangle-list icon"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;Menu 4
          </p>
          <p>
            <i class="fa-regular fa-circle icon"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;Menu 5
          </p>
        </div>
      </div>
    </>
  );
};

export default SideBar;
