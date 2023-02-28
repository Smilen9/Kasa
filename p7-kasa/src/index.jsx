import React from "react";
import Error from "./pages/Error";
import Home from "./pages/Home";
import APropos from "./pages/APropos";
import Logement from "./pages/Logement";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ReactDOM from 'react-dom/client';
import mainCss from './style/main.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/apropos" element={<APropos />} />
                <Route path="/" element={<Home />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
)

reportWebVitals()