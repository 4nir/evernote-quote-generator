import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactFCCtest from "react-fcctest";
import QuoteRender from "./components/QuoteRender";
import QuoteRenderHook from "./components/QuoteRenderHooks";

function App() {
  return (
    <div className="App">
      <ReactFCCtest />
      <header className="App-header">
        <div id="quote-box">
          {/* <QuoteRender /> */}
          <QuoteRenderHook />
        </div>
      </header>
    </div>
  );
}

export default App;
