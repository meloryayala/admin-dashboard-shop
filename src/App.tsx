import {BrowserRouter, Route, Routes} from "react-router-dom";
import TemplateDefault from "./templates/TemplateDefault";
import Dashboard from "./pages/Dashboard";
import {
    ArrowsRightLeftIcon as ExchangeIcon,
    BuildingStorefrontIcon as StockIcon,
    CubeIcon as OrderIcon,
    TagIcon as DemoIcon,
    WrenchScrewdriverIcon as RepairIcon
} from "@heroicons/react/24/outline";
import Orders from "./pages/Orders";
import Stock from "./pages/Stock";
import Exchanges from "./pages/Exchanges";
import Repairs from "./pages/Repairs";
import Demos from "./pages/Demos";
import OrderDetails from "./pages/forms/OrderDetails";
import ExchangeDetails from "./pages/forms/ExchangeDetails";
import React from "react";

const App = () => {
  return(
      <BrowserRouter>
          <TemplateDefault>
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


                  <Route path="/stock" element={
                      <Stock
                          title='Stock'
                          pageIcon={<StockIcon className="h-9 w-9"/>}
                      />}/>

                  <Route path="/exchanges" element={
                      <Exchanges
                          title='Exchanges'
                          pageIcon={<ExchangeIcon className="h-9 w-9 text-sky-400"/>}
                      />}/>

                  <Route path="/repairs" element={
                      <Repairs
                          title='Repairs'
                          pageIcon={<RepairIcon className="h-9 w-9 text-red-400"/>}
                      />}/>

                  <Route path="/demos" element={
                      <Demos
                          title='Demos'
                          pageIcon={<DemoIcon className="h-9 w-9 text-violet-400"/>}
                      />}/>

                  <Route path="/orders/details/:orderNumber" element={
                      <OrderDetails
                          title='Order'
                          pageIcon={<OrderIcon className="h-9 w-9 text-accent"/>}
                      />}/>

                  <Route path="/exchanges/details/:orderNumber" element={
                      <ExchangeDetails
                          title='Exchanges'
                          pageIcon={<ExchangeIcon className="h-9 w-9 text-sky-400"/>}
                      />}/>


              </Routes>
          </TemplateDefault>
      </BrowserRouter>
  )
}

export default App;