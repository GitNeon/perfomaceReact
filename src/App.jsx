import './App.css'
import Home              from "./home";
import { Route, Routes } from "react-router-dom";
import Vite              from "./pages/vite";
import WebWorker         from "./pages/webWorker";
import GenerateFibonacci from "./pages/webWorkerHook";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/vite" element={ <Vite/> }/>
                <Route path="/webWorker" element={ <WebWorker/> }/>
                <Route path="/webWorkerHook" element={ <GenerateFibonacci/> }/>
            </Routes>
        </div>
    )
}

export default App
