import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Nav from "./navbar";
import Carousel from "./carousel";
import About from "./about";
import Type from "./types";
import Footer from "./footer";
import "./css/bootstrap.min.css";
import "./css/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Carousel />
      <About />
      <Type />
      <Footer />
    </div>
  );
}

export default App;
