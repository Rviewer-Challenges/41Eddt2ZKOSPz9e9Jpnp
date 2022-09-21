import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/home"
import Login from "../pages/login"

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
        {/* <Route path="/" element={<Login/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}
