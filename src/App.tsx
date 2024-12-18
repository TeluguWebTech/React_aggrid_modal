import React from "react";
import AccountGrid from "./AccountGrid";
import "./App.css"; 

const App: React.FC = () => {
  return (
    <div >
      <h1>AG Grid Example</h1>
      <div >
        <AccountGrid />
      </div>
    </div>
  );
};

export default App;
