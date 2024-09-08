import { useEffect } from "react";
import { StateProvider } from "../utils/contexts/contexts";

import ApplicationView from "./application-view/application-view";

import { users } from "../utils/constants/data"

const App = () => {
  useEffect(() => {
    //localStorage.clear();
    const storedUsers = localStorage.getItem("users");
    if (!storedUsers) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, []);
  
  return (
    <StateProvider>
      <ApplicationView />
    </StateProvider>
  );
}

export default App;
