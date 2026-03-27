import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

// pages
import Hero from "./page/Hero";
import Login from "./page/Login";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Hero />} />
                </Route>
                <Route path="login" element={<Login/>} />
            </Routes>
        </>
    )
}

export default App;