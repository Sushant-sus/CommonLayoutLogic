import React from "react";
import "./App.css";
import CommonLayout from "./components/layout/CommonLayout";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/item" element={<About />} />
          <Route path="/track" element={<Contact />} />
          <Route path="/reorder" element={<Contact />} />
          <Route path="/supplier" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
