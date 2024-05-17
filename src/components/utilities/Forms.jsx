import { AnimatePresence, motion } from "framer-motion";
import { PropTypes } from "prop-types";
import { useFormContext } from "react-hook-form";
import { MdError } from "react-icons/md";
import { findInputError } from "./findInputError";
import { isFormInvalid } from "./isFormInvalid";
import classNames from "classnames";

export const Input = ({
  label,
  type,
  id,
  placeholder,
  validation,
  name,
  multiline,
  className,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);
  const input_tailwind =
    "p-5 font-medium rounded-md w-full border border-slate-300 placeholder:opacity-60";

  return (
    <div className={classNames("flex flex-col w-full gap-2", className)}>
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
      {multiline ? (
        <textarea
          id={id}
          type={type}
          className={classNames(
            input_tailwind,
            "min-h-[10rem] max-h-[20rem] resize-y"
          )}
          placeholder={placeholder}
          {...register(`${name}`, validation)}
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          className={classNames(input_tailwind)}
          placeholder={placeholder}
          {...register(name, validation)}
        />
      )}
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
  multiline: PropTypes.bool,
  className: PropTypes.string,
};

InputError.propTypes = {
  message: PropTypes.string,
};
