import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import Home from "./Pages/Home/Home";


function App() {
  return (
    <div>
         <Navbar></Navbar>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="*" element={<p className="text-center py-20 text-error font-bold text-4xl">There's nothing here: 404!</p>} />a
      </Routes>
    </div>
  );
}

export default App;
