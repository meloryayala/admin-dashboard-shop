import logo from '../assets/images/admin-logo.svg'
import {
    ArrowsRightLeftIcon as ExchangeIcon,
    BuildingStorefrontIcon as StockIcon,
    CubeIcon as OrderIcon,
    Squares2X2Icon as DashboardIcon,
    TagIcon as DemoIcon,
    WrenchScrewdriverIcon as RepairIcon,
} from '@heroicons/react/24/outline'
import {Link} from 'react-router-dom'


const Drawer = () => {
    return (
        <div className="drawer md:drawer-open w-auto">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>

            <div className="drawer-side inline-block">
                <ul className="menu p-4 md:w-60 lg:w-70 xl:w-80 h-screen bg-base-300 space-y-4 text-base-content">
                    <li className="m-6">
                        <Link to="/">
                            <img src={logo} alt="Logo" className="flex items-center p-0"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <DashboardIcon className="h-7 w-7"/>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/orders">
                            <OrderIcon className="h-7 w-7"/>
                            Orders
                        </Link>
                    </li>
                    <li>
                        <Link to="/stock">
                            <StockIcon className="h-7 w-7"/>
                            Stock
                        </Link>
                    </li>
                    <li>
                        <Link to="/exchanges">
                            <ExchangeIcon className="h-7 w-7"/>
                            Exchanges
                        </Link>
                    </li>
                    <li>
                        <Link to="/repairs">
                            <RepairIcon className="h-7 w-7"/>
                            Repairs
                        </Link>
                    </li>
                    <li>
                        <Link to="/demos">
                            <DemoIcon className="h-7 w-7"/>
                            Demos
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Drawer