import "./css/App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import ThemeMode from "./components/ThemeMode";
import { Route, Routes } from "react-router-dom";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const toogleThemeMode = () => {
    if (themeMode === "light") {
      setThemeMode("dark");
      document.body.className = "bg-dark";
    } else {
      setThemeMode("light");
      document.body.className = "bg-light";
    }
  };
  return (
    <>
      <Navbar title="My first React App" themeMode={themeMode} />
      <div className="mt-3">
        <Routes>
          <Route path="/about" element={<About themeMode={themeMode} />} />
          <Route
            path="/"
            element={
              <div className="container">
                <TextForm
                  heading="Enter text below to analyze"
                  themeMode={themeMode}
                />
              </div>
              
            }
          />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
      <ThemeMode
        themeMode={themeMode}
        onClickToogleThemeMode={toogleThemeMode}
      />
    </>
  );
}

export default App;
