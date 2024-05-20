import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      const userData = localStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } else {
      alert("Login dulu kau ppek");
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Loading user data...</div>;
  }

  console.log(user);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-8">Dashboard</h1>
      <p>Selamat datang, {user.name}</p>
    </div>
  );
};

export default Dashboard;
