import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/My-Pages/Home/Home";
import About from "./Components/My-Pages/About";
import Blog from "./Components/My-Pages/Blog";
import Resources from "./Components/My-Pages/Resources";
import Services from "./Components/My-Pages/Services";
import Contact from "./Components/My-Pages/Contact";
import NotFound from "./Components/Error-Pages/NotFound";

function App() {
  return (
    <section className="MyAppContainer">
      <section>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/resources" element={<Resources />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </section>
    </section>
  );
}

export default App;
