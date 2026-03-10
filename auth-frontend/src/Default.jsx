import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Signup from "./signup";
import Login from "./Login";
import Dashboard from "./Dashboard";

const Default = () => {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<App/>}></Route>
     <Route path="/signup" element={<Signup/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/dashboard" element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Default
