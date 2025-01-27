// import React from 'react'
import { Route,BrowserRouter as Router,Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import { Home,About,Project,Contact } from "./pages";

const App = () => {
  return (
    <main className="bg-slate-300/20">
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/project" element={<Project/>}/>
                <Route path="/contact" element={<Contact/>}/>



            </Routes>
        </Router>

    </main>
   
  )
}

export default App
