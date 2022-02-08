import { createContext, useContext } from "react";
import { withSize } from "react-sizeme";

const SizeContext = createContext();
export const useSize = () => useContext(SizeContext);

const SizeProvider = ({ children, size }) => {
  return <SizeContext.Provider value={size}>{children}</SizeContext.Provider>;
};

export default withSize()(SizeProvider);
