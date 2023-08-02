import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { Routes,Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
const App=()=>{


  return <div>
    <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
     </Routes>
  </div>
}

export default App;