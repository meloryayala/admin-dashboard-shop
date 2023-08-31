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
import {
    ArrowsRightLeftIcon as ExchangeIcon,
    BuildingStorefrontIcon as StockIcon,
    CubeIcon as OrderIcon,
    TagIcon as DemoIcon,
    WrenchScrewdriverIcon as RepairIcon,
} from '@heroicons/react/24/outline'
import OrderDetails from "./pages/OrderDetails";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
                <App>
                    <Routes>
                        <Route path="/" element={
                            <Dashboard
                                title='Dashboard'
                                pageIcon={<OrderIcon className="h-9 w-9 "/>}
                            />}/>

                        <Route path="/orders" element={
                            <Orders
                                title='Orders'
                                pageIcon={<OrderIcon className="h-9 w-9 "/>}
                            />}/>

                        <Route path="/orders/details/:orderNumber" element={
                            <OrderDetails
                                title='Order'
                                pageIcon={<OrderIcon className="h-9 w-9 text-accent"/>}
                            />}/>

                        <Route path="/stock" element={
                            <Stock
                                title='Stock'
                                pageIcon={<StockIcon className="h-9 w-9"/>}
                            />}/>

                        <Route path="/exchanges" element={
                            <Exchanges
                                title='Exchanges'
                                pageIcon={<ExchangeIcon className="h-9 w-9 text-sky-500"/>}
                            />}/>

                        <Route path="/repairs" element={
                            <Repairs
                                title='Repairs'
                                pageIcon={<RepairIcon className="h-9 w-9 text-pink-500"/>}
                            />}/>

                        <Route path="/demos" element={
                            <Demos
                                title='Demos'
                                pageIcon={<DemoIcon className="h-9 w-9 text-violet-500"/>}
                            />}/>

                    </Routes>
                </App>
        </BrowserRouter>
    </React.StrictMode>
);