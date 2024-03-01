import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Estate from "./pages/Estate";
import Error from "./pages/Error";
import "./_index.scss";

function App() {
    return (
        <Router>
            <div>
                {/*Route*/}
                <Routes>
                    {/*Route pour la page d'accueil*/}
                    <Route path="/" element={<Home />} />
                    {/*Route pour la page à propos*/}
                    <Route path="/a-propos" element={<Apropos />} />
                    {/*Route pour la page des logements*/}
                    <Route path="/estate/:id" element={<Estate />} />
                    {/*Route pour la page erreur 404*/}
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App