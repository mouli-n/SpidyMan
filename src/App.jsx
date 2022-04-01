import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Headers from "./Components/Headers";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Calc from "./Components/Calc";
import Dummy from "./Components/Dummy";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import DragnDrop from "./Components/DragnDrop";

function App() {
  return (
    <div>
    <div className="bg-slate-400 h-screen overflow-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calc" element={<Calc />} />
        <Route path="/dummy" element={<Dummy />} />
        <Route path="/dragndrop" element={<DragnDrop />} />
      </Routes>
    </div>
    fffff
    </div>
  );
}

export default App;
