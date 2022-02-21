import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Headers from "./Components/Headers";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-slate-400 h-screen overflow-auto">
      <Headers />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
