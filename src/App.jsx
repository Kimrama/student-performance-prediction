import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Selection from "./pages/selection";
import Prediction from "./pages/prediction";
import ScoreFactors from "./pages/scoreFactor";

function App() {
    return (
        <>
            <nav className="h-[8vh] bg-theme-blue sticky top-0"></nav>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/selection" element={<Selection />} />
                    <Route path="/prediction" element={<Prediction />} />
                    <Route path="/scoreFactors" element={<ScoreFactors />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
