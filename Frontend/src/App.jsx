import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

// pages
import Hero from "./page/Hero";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Hero />} />
                </Route>
            </Routes>
        </>
    )
}

export default App;