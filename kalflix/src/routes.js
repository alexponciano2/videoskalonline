import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Table from "./pages/Table";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>                
                <Route path="/table" element={<Table />}></Route> 
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;