import { createContext, useContext, useState } from "react";

const OpenForm = createContext();

export const useOpen = () => {
  const context = useContext(OpenForm);

  if (!context) {
    throw new Error("useOpen must bu used within an OpenProvider.");
  }
  return context;
};

export const OpenProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const onChangeOpenedState = () => {
    setOpen((value) => !value);
  };

  return (
    <OpenForm.Provider value={{ open, onChangeOpenedState }}>
      {children}
    </OpenForm.Provider>
  );
};
