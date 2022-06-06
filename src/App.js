import React from "react";
import Header from "./components/Header/Header";
import Liens from "./components/Liens/Liens";
import Tableau from "./components/Tableau/Tableau";

const App = (props) => {

  return (
    <div>
      <Header />

    <div className="main">
        <Tableau />
        <Liens />
    </div>
    </div>
  )
}

export default App;
