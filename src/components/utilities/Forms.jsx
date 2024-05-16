import { AnimatePresence, motion } from "framer-motion";
import { PropTypes } from "prop-types";
import { useFormContext } from "react-hook-form";
import { MdError } from "react-icons/md";
import { findInputError } from "./findInputError";
import { isFormInvalid } from "./isFormInvalid";

export const Input = ({ label, type, id, placeholder, validation, name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex justify-between">
        <label htmlFor={id} className="font-semibold capitalize">
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      <input
        id={id}
        type={type}
        className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
        placeholder={placeholder}
        {...register(name, validation)}
      />
    </div>
  );
};

const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  trainsition: { duration: 0.2 },
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  validation: PropTypes.object,
  name: PropTypes.string,
};

InputError.propTypes = {
  message: PropTypes.string,
};
