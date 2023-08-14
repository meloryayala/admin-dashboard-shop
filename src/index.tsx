import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './styles/global.css'
import Orders from "./pages/Orders";
import Dashboard from "./pages/Dashboard";
import App from "./templates/App";
import Stock from "./pages/Stock";
import Exchanges from "./pages/Exchanges";
import Repairs from "./pages/Repairs";
import Demos from "./pages/Demos";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/orders" element={<Orders />}/>
                    <Route path="/stock" element={<Stock />}/>
                    <Route path="/exchanges" element={<Exchanges />}/>
                    <Route path="/repairs" element={<Repairs />}/>
                    <Route path="/demos" element={<Demos />}/>
                </Routes>
            </App>
        </BrowserRouter>
    </React.StrictMode>
);