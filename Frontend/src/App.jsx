import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    
                </Route>
            </Routes>
        </>
    )
}

export default App;