import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
