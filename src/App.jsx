import './App.css'
import Home              from "./home";
import { Route, Routes } from "react-router-dom";
import Vite              from "./vite";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/vite" element={ <Vite/> }/>
            </Routes>
        </div>
    )
}

export default App
