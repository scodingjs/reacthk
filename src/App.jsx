import { Outlet } from 'react-router-dom';
import 'flowbite';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App


// src/App.js

// import React from "react";

// export default function App() {
//   return (
//     <main>
//       <Navbar />
//       <About />
//       <Projects />
//       <Skills />
//       <Testimonials />
//       <Contact />
//     </main>
//   );
// }