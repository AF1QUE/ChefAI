import React, { createContext, useContext, useEffect, useState } from "react";

const PromptContext = createContext();
export const usePromptContext = () => useContext(PromptContext);

const PromptProvider = ({ children }) => {
  const [getPrompt, setPrompt] = useState({
    ingredients: [],
    type: "",
    cuisine: "",
    description: "",
  });

  useEffect(() => {
    return () => {
      resetPrompt();
    };
  }, []);

  const resetPrompt = () => {
    setPrompt({
      ingredients: [],
      type: "",
      cuisine: "",
      description: "",
    });
  };

  return (
    <PromptContext.Provider
      value={{
        getPrompt,
        setPrompt,
        resetPrompt,
      }}
    >
      {children}
    </PromptContext.Provider>
  );
};

export default PromptProvider;
