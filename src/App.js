import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./components/Main";
import ScrollToTop from "./ScrollToTop";
import { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [isActive, setIsActive] = useState("Home");

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Route exact path="/">
          <Main isActive={isActive} setIsActive={setIsActive} />
          <Nav isActive={isActive} setIsActive={setIsActive} />
          <About isActive={isActive} setIsActive={setIsActive} />
          <Projects isActive={isActive} setIsActive={setIsActive} />
          <Contact isActive={isActive} setIsActive={setIsActive} />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
