import React from "react"
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import API from "./pages/API"
import APIDetail from "./pages/APIDetail"

export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<API />} />
        <Route path="/api/:id" element={<APIDetail />} />
      </Routes>
    </React.Fragment>
  )
}