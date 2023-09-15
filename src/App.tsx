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
import OrderForm from "./pages/forms/OrderForm";
import ExchangeForm from "./pages/forms/ExchangeForm";
import React from "react";
import RepairForm from "./pages/forms/RepairForm";


const App = () => {

    const stockIcon = <StockIcon className={`h-9 w-9`} />
    const orderIcon = <OrderIcon className="h-9 w-9 text-amber-400" />
    const exchangeIcon = <ExchangeIcon className="h-9 w-9 text-sky-400" />
    const repairIcon = <RepairIcon className="h-9 w-9 text-red-400" />
    const demoIcon = <DemoIcon className="h-9 w-9 text-violet-400" />


  return(
      <BrowserRouter>
          <TemplateDefault>
              <Routes>
                  <Route path="/" element={
                      <Dashboard title='Dashboard'
                         pageIcon={orderIcon}
                      />}/>

                  <Route path="/orders" element={
                      <Orders
                          title='Orders'
                          pageIcon={orderIcon}
                      />}/>


                  <Route path="/stock" element={
                      <Stock
                          title='Stock'
                          pageIcon={stockIcon}
                      />}/>

                  <Route path="/exchanges" element={
                      <Exchanges
                          title='Exchanges'
                          pageIcon={exchangeIcon}
                      />}/>

                  <Route path="/repairs" element={
                      <Repairs
                          title='Repairs'
                          pageIcon={repairIcon}
                      />}/>

                  <Route path="/demos" element={
                      <Demos
                          title='Demos'
                          pageIcon={demoIcon}
                      />}/>

                  <Route path="/orders/details/:orderNumber" element={
                      <OrderForm
                          title='Order'
                          pageIcon={orderIcon}
                      />}/>

                  <Route path="/exchanges/details/:orderNumber" element={
                      <ExchangeForm
                          title='Exchange'
                          pageIcon={exchangeIcon}
                      />}/>

                  <Route path="/repairs/details/:orderNumber" element={
                      <RepairForm
                          title='Repair'
                          pageIcon={repairIcon}
                      />}/>

              </Routes>
          </TemplateDefault>
      </BrowserRouter>
  )
}

export default App;