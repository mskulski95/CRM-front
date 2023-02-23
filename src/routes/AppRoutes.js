import { Route, Routes } from "react-router";
import AddClient from "../components/AddClient";
import Client from "../views/Client";
import Home from "../views/Home";
import Login from "../views/Login";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/client/:id" element={<Client />}/>
            <Route path="/client/add" element={<AddClient />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    )
}

export default AppRoutes;