import "bootswatch/dist/darkly/bootstrap.css";
import "../custom.css";
import React from "react";

import Rotas from "./rotas";
import NavBar from "../components/navbar";

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="container">
          <Rotas />
        </div>
      </>
    );
  }
}

export default App;
