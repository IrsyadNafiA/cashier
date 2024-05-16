import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { users } from "../../api/Users";
import { AuthContext } from "./AuthContext";
import { useContext, useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { login, isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // reset(console.log(data));
    const user = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (user) {
      login(user);
      navigate("/dashboard");
    } else {
      alert("Email atau password salah");
    }
  };

  return (
    <div className="bg-lime-400 w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">LOGIN</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid.",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password should be at-least 6 characters.",
              },
            })}
          />
          {errors.password && (
            <p className="errorMsg">{errors.password.message}</p>
          )}
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
      <Link to={"/register"}>{`Don't have an account?`}</Link>
    </div>
  );
};

export default Login;
