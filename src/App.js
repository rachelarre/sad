import React from "react";
import "./css/App.css";
import NavBar from "./NavBar";
import AffectiveDisplay from "./AffectiveDisplay";
import Footer from "./Footer";

function App() {
  return (
    <section className="app">
      <NavBar />
      <AffectiveDisplay />
      <Footer />
    </section>
  );
}

export default App;
