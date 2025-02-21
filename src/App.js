import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Main from "./Main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
