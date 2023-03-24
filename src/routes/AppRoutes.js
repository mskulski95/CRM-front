import { Route, Routes } from "react-router";
import AddClient from "../components/AddClient";
import EditClient from "../components/EditClient";
import Client from "../views/Client";
import Home from "../views/Home";
import Login from "../views/Login";
import AddAction from '../components/AddAction';
import Signup from "../views/Signup";

const AppRoutes = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Home user={props.user} />}/>
            <Route path="/client/:id" element={<Client />}/>
            <Route path="/client/:id/action" element={<AddAction />}/>
            <Route path="/client/add" element={<AddClient user={props.user} />}/>
            <Route path="/client/edit/:id" element={<EditClient />}/>
            <Route path="/login" element={<Login setUser={props.setUser} />}/>
            <Route path="/signup" element={<Signup />}/>
        </Routes>
    )
}

export default AppRoutes;