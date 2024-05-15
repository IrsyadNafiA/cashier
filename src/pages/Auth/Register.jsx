import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-lime-400 w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">REGISTER</h1>
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
              validate: {
                checkLength: (value) => value.length >= 8,
                matchPattern: (value) =>
                  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                    value
                  ),
              },
            })}
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required.</p>
          )}
          {errors.password?.type === "checkLength" && (
            <p className="text-red-500">
              Password should be at-least 8 characters.
            </p>
          )}
          {errors.password?.type === "matchPattern" && (
            <p className="text-red-500">
              Password should contain at least one uppercase letter, lowercase
              letter, digit, and special symbol.
            </p>
          )}
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
