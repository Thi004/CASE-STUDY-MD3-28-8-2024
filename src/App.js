import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import ListProductUser from "./components/ListProductUser";
import Create from "./components/Create";
import Update from "./components/Update";
import ListProductAdmin from "./components/ListProductAdmin";


function App() {
    return (
        <>
            <Routes>
                <Route element={<Home/>} path={'/'}>
                    <Route element={<Users/>} path={'users'}></Route>
                    <Route element={<Login/>} path={'login'}></Route>
                    <Route element={<Register/>} path={'register'}></Route>
                    <Route element={<Admin/>} path={'admin'}>
                        <Route element={<ListProductAdmin/>} path={'list'}></Route>
                        <Route element={<Create/>} path={'create'}></Route>
                        <Route element={<Update/>} path={'update'}></Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
