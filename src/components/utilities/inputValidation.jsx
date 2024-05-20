export const UsernameValidation = {
  name: "name",
  label: "name",
  type: "text",
  id: "name",
  placeholder: "write your name ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};

export const PasswordValidation = {
  name: "password",
  label: "password",
  type: "password",
  id: "password",
  placeholder: "write your password ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    minLength: {
      value: 6,
      message: "min 6 characters",
    },
  },
};

export const TextareaValidation = {
  name: "description",
  label: "description",
  multiline: true,
  id: "description",
  placeholder: "write description ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 200,
      message: "200 characters max",
    },
  },
};

export const EmailValidation = {
  name: "email",
  label: "email",
  type: "email",
  id: "email",
  placeholder: "write your email eg@eg.com",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    pattern: {
      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
      message: "Email is not valid.",
    },
  },
};
