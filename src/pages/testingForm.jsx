import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../components/utilities/Forms";
import { GrMail } from "react-icons/gr";
import {
  PasswordValidation,
  UsernameValidation,
} from "../components/utilities/inputValidation";
function TestingForm() {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="p-4"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Input {...UsernameValidation} />
          <Input {...PasswordValidation} />
        </div>
        <div className="mt-5">
          <button
            onClick={onSubmit}
            className="flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
          >
            <GrMail />
            Submit Form
          </button>
        </div>
      </form>
    </FormProvider>
  );
}

export default TestingForm;