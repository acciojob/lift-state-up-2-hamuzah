
import React from "react";
import './../styles/App.css';
import Parent from "./Parent";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Parent /> {/* Pass the required props to Parent component */}
    </div>
  )
}

export default App
