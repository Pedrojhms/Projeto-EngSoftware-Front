import "bootswatch/dist/darkly/bootstrap.css";
import "../custom.css";
import React from "react";

import Rotas from "./rotas";
import NavBar from "../components/navbar";
import UsuarioProvider from "../app/context/UsuarioContext";

class App extends React.Component {
  render() {
    return (
      <>
        <UsuarioProvider>
          <NavBar />
          <div className="container">
            <Rotas />
          </div>
        </UsuarioProvider>
      </>
    );
  }
}

export default App;
