import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../pages/Auth/AuthContext";

const withAuth = (WrappedComponent) => {
  return (props) => {
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
        alert("Login dulu kau");
        navigate("/login");
      }
    }, [isLoggedIn, navigate]);

    if (!isLoggedIn) {
      return <div>Loading...</div>;
    }

    if (!user) {
      return <div>Loading user data...</div>;
    }

    return <WrappedComponent user={user} {...props} />;
  };
};

export default withAuth;
