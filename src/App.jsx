import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Selection from "./pages/selection";

function App() {
    return (
        <>
            <nav className="h-[8vh] bg-theme-blue sticky top-0"></nav>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/selection" element={<Selection />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
