import {createContext, useState} from "react"

const UserProgressContext = createContext({
  progress: "", // cart, order
  showCart: () => {},
  hideCart: () => {},
  showOrder: () => {},
  hideOrder: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");

  function showCart() {
    setUserProgress("cart");
  }

  function hideCart() {
    setUserProgress("");
  }
  function showOrder() {
    setUserProgress("order");
  }
  function hideOrder() {
    setUserProgress("");
  }

  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showOrder,
    hideOrder,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}
export default UserProgressContext;
