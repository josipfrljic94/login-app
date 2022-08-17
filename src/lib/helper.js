export const getFormFields = (step) => {
  const formFields = {
    1: [
      { fieldKey: "firstName", type: "text" },
      { fieldKey: "lastName", type: "text" },
      { fieldKey: "gender", type: "select" },
      { fieldKey: "date", type: "date" },
      { fieldKey: "phone", type: "text" },
      { fieldKey: "country", type: "select" },
    ],
    2: [
      { fieldKey: "username", type: "text" },
      { fieldKey: "email", type: "text" },
      { fieldKey: "password", type: "password" },
      { fieldKey: "confirmPassword", type: "password" },
    ],
    3: [
      { fieldKey: "ccn", type: "text" },
      { fieldKey: "expirationMonth", type: "select" },
      { fieldKey: "expirationYear", type: "select" },
      { fieldKey: "cvv", type: "text" },
    ],
  };
  return formFields[step] ?? formFields[1];
};

export const formFieldFactory = (value, t, onChange) => (keyName, type) => ({
  label: t(keyName),
  keyName,
  type,
  value: value[keyName],
  //   errorMsg: t(errorMsg),
  placeholder: t(`${keyName}-placeholder`),
});
