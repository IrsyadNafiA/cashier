import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { users } from "../../api/Users";
import { AuthContext } from "./AuthContext";
import { useContext, useEffect } from "react";
import { Input } from "../../components/utilities/Forms";
import {
  EmailValidation,
  PasswordValidation,
} from "../../components/utilities/inputValidation";

const Login = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const { login, isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  const onSubmit = methods.handleSubmit((data) => {
    // console.log(data);
    const user = users.find(
      (user) => user.email === data.email && user.password === data.password
    );
    if (user) {
      login(user);
      navigate("/dashboard");
    } else {
      alert("Email atau password salah");
    }
  });

  return (
    <div className="bg-lime-400 w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">LOGIN</h1>
      <FormProvider {...methods}>
        <form>
          <div className="flex flex-col gap-4 mb-4">
            <Input {...EmailValidation} />
            <Input {...PasswordValidation} />
          </div>
          <div className="form-control">
            <label></label>
            <button
              type="submit"
              onClick={onSubmit}
              className="p-4 border border-black rounded-md"
            >
              Login
            </button>
          </div>
        </form>
      </FormProvider>
      <Link to={"/register"} className="mt-4">{`Don't have an account?`}</Link>
    </div>
  );
};

export default Login;
