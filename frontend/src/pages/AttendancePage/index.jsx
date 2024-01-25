import React, { useState } from "react";
import "./attendancepage.css";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import { Table, Button, Modal } from "antd";

const AttendancePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAttendance, setSelectedAttendance] = useState(null);

  const showModal = (attendance) => {
    setSelectedAttendance(attendance);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      attendance: {
        "01 Sun": "full",
        "02 Mon": "half",
        "03 Tue": "absent",
        "04 Wed": "full",
        "05 Thu": "absent",
        "06 Fri": "half",
        "07 Sat": "full",
      },
    },
    {
      key: "2",
      name: "Jon",
      attendance: {
        "01 Sun": "full",
        "02 Mon": "half",
        "03 Tue": "absent",
        "04 Wed": "full",
        "05 Thu": "absent",
        "06 Fri": "half",
        "07 Sat": "full",
      },
    },
    // Add more entries as needed
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "01 Sun",
      dataIndex: "attendance",
      render: (at) => (
        <CellRenderer
          value={at["01 Sun"]}
          onClick={() => showModal(at["01 Sun"])}
        />
      ),
      key: "01 Sun",
    },
    {
      title: "02 Mon",
      dataIndex: "attendance",
      render: (at) => (
        <CellRenderer
          value={at["02 Mon"]}
          onClick={() => showModal(at["02 Mon"])}
        />
      ),
      key: "02 Mon",
    },
    {
      title: "03 Tue",
      dataIndex: "attendance",
      render: (at) => (
        <CellRenderer
          value={at["03 Tue"]}
          onClick={() => showModal(at["03 Tue"])}
        />
      ),
      key: "03 Tue",
    },
    {
      title: "04 Wed",
      dataIndex: "attendance",
      render: (at) => (
        <CellRenderer
          value={at["04 Wed"]}
          onClick={() => showModal(at["04 Wed"])}
        />
      ),
      key: "04 Wed",
    },
    {
      title: "05 Thu",
      dataIndex: "attendance",
      render: (at) => (
        <CellRenderer
          value={at["05 Thu"]}
          onClick={() => showModal(at["05 Thu"])}
        />
      ),
      key: "05 Thu",
    },
    {
      title: "06 Fri",
      dataIndex: "attendance",
      render: (at) => (
        <CellRenderer
          value={at["06 Fri"]}
          onClick={() => showModal(at["06 Fri"])}
        />
      ),
      key: "06 Fri",
    },
    {
      title: "07 Sat",
      dataIndex: "attendance",
      render: (at) => (
        <CellRenderer
          value={at["07 Sat"]}
          onClick={() => showModal(at["07 Sat"])}
        />
      ),
      key: "07 Sat",
    },
  ];

  const CellRenderer = ({ value, onClick }) => (
    <div onClick={onClick} style={{ cursor: "pointer", color: "blue" }}>
      {value}
    </div>
  );

  return (
    <>
      <SideBar />
      <NavBar />
      <div className="main">
        <Table dataSource={dataSource} columns={columns} pagination={false} />
        <Modal
          title="Attendance Details"
          visible={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>{selectedAttendance}</p>
        </Modal>
      </div>
    </>
  );
};

export default AttendancePage;
