import { Button } from "@chakra-ui/react"
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import CreatePage from "./pages/CreatePage"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import { Box } from "@chakra-ui/react"
import React from "react"
import { BrowserRouter as Router } from "react-router-dom"


function App() {
  return (
    <>
     <Box minH={"100vh"} >
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
      </Routes>
      </Box>
    </>
  )
}

export default App
