import React from "react";

export const AppContext = React.createContext({
  loggedInUser: [],
  setLoggedInUser: (val) => {},
});

const AppProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = React.useState();

  return (
    <AppContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
