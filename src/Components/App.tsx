import { useState } from "react";
import reactLogo from "./assets/react.svg";
//import "../style/App.css";
import { Header } from "./Header";
import { About } from "./About";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="App text-center">
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
