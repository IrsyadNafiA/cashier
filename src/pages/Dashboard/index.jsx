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
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Loading user data...</div>;
  }

  return (
    <div>
      <p>Selamat datang, {user.name}</p>
    </div>
  );
};

export default Dashboard;
