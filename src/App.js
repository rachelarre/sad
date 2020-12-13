import React from "react";
import "./css/App.css";
import NavBar from "./NavBar";
import AffectiveDisplay from "./AffectiveDisplay";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="spacing-md"></div>
      <AffectiveDisplay />
      <div className="spacing-md"></div>
      <Footer />
    </div>
  );
}

export default App;
