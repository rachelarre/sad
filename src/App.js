import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import AffectiveDisplay from "./AffectiveDisplay";
import Process from "./Process";

function App() {
  return (
    <Container maxWidth="lg">
      <div className="App">
        <NavBar />
        <AffectiveDisplay />
        <Divider light />
        <Process />
      </div>
    </Container>
  );
}

export default App;
