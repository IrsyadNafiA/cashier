// import { useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../Auth/AuthContext";

const Dashboard = ({ user }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      <p>Selamat datang, {user.name}</p>
    </div>
  );
};

export default Dashboard;
