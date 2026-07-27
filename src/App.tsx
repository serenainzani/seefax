import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Page100 } from "./pages/Page100";
import { Page101Cookery } from "./pages/Page101Cookery";
import { Page102Entertainment } from "./pages/Page102Entertainment";
import { Page105Films } from "./pages/Page105Films";
import { Page120Lottery } from "./pages/Page120Lottery";
import { Page130Weather } from "./pages/Page130Weather";
import { Page180Joke } from "./pages/Page180Joke";
import { Page200About } from "./pages/Page200About";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/100" replace />} />
                <Route path="/100" element={<Page100 />} />
                <Route path="/101" element={<Page101Cookery />} />
                <Route path="/102" element={<Page102Entertainment />} />
                <Route path="/105" element={<Page105Films />} />
                <Route path="/120" element={<Page120Lottery />} />
                <Route path="/130" element={<Page130Weather />} />
                <Route path="/180" element={<Page180Joke />} />
                <Route path="/200" element={<Page200About />} />
                <Route path="*" element={<Navigate to="/100" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
