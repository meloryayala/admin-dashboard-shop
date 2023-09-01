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

const App = () => {
    const orderColor = "amber-400"
    const exchangeColor = "sky-400"
    const repairColor = "red-400"
    const demoColor = "violet-400"

    const styleIconPage = `h-9 w-9 text-`
    const stockIcon = <StockIcon className={styleIconPage}/>
    const orderIcon = <OrderIcon className={styleIconPage + orderColor}/>
    const exchangeIcon = <ExchangeIcon className={styleIconPage + exchangeColor}/>
    const repairIcon = <RepairIcon className={styleIconPage + repairColor}/>
    const demoIcon = <DemoIcon className={styleIconPage + demoColor}/>


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
                          exchangeColor={exchangeColor}
                      />}/>

                  <Route path="/repairs" element={
                      <Repairs
                          title='Repairs'
                          pageIcon={repairIcon}
                          repairColor={repairColor}
                      />}/>

                  <Route path="/demos" element={
                      <Demos
                          title='Demos'
                          pageIcon={demoIcon}
                          demoColor={demoColor}
                      />}/>

                  <Route path="/orders/details/:orderNumber" element={
                      <OrderForm
                          title='Order'
                          pageIcon={orderIcon}
                          orderColor={orderColor}
                      />}/>

                  <Route path="/exchanges/details/:orderNumber" element={
                      <ExchangeForm
                          title='Exchange'
                          pageIcon={exchangeIcon}
                          exchangeColor={exchangeColor}
                      />}/>


              </Routes>
          </TemplateDefault>
      </BrowserRouter>
  )
}

export default App;