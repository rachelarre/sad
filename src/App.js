import React from "react";
import "./css/App.css";
import NavBar from "./NavBar";
import AffectiveDisplay from "./AffectiveDisplay";
import Footer from "./Footer";

function App() {
  return (
    //renders all the main component blocks
    <section className="app">
      <NavBar />
      <AffectiveDisplay />
      <Footer />
      {/* Future process section */}
    </section>
  );
}

export default App;
