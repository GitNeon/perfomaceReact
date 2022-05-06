import './App.css'
import Home              from "./home";
import { Route, Routes } from "react-router-dom";
import Vite              from "./pages/vite";
import WebWorker         from "./pages/webWorker";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/vite" element={ <Vite/> }/>
                <Route path="/webWorker" element={ <WebWorker/> }/>
            </Routes>
        </div>
    )
}

export default App
