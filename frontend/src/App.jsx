import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Toaster} from "react-hot-toast"
import './App.css'
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Toaster/>
    </Router>
  )
}

export default App
