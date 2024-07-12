import { createContext } from "react";
import { service_data } from "../ServicesDisplay/ServicesData/ServicesDisplay";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const contextValue = {
    service_data,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
