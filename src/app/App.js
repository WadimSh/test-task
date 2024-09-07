import React from "react";
import { StateProvider } from "../utils/contexts/contexts";

import ApplicationView from "./application-view/application-view";

const App = () => {
  
  return (
    <StateProvider>
      <ApplicationView />
    </StateProvider>
  );
}

export default App;
