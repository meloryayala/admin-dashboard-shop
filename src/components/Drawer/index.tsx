import logo from '../../assets/images/admin-logo.svg'
import {
    Squares2X2Icon as DashboardIcon,
    CubeIcon as OrderIcon,
    BuildingStorefrontIcon as StockIcon,
    ArrowsRightLeftIcon as ExchangeIcon,
    WrenchScrewdriverIcon as RepairIcon,
    TagIcon as DemoIcon,
} from '@heroicons/react/24/outline'


const Drawer = () => {
    return (
        <div className="drawer md:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 space-y-4 text-base-content">
                    {/* Sidebar content here */}
                    <li className="m-12">
                        <img src={logo} alt="Logo" className="flex items-center"/>
                    </li>
                    <li>
                        <a>
                            <DashboardIcon className="h-7 w-7"/>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a>
                            <OrderIcon className="h-7 w-7"/>
                            Orders
                        </a>
                    </li>
                    <li>
                        <a>
                            <StockIcon className="h-7 w-7"/>
                            Stock
                        </a>
                    </li>
                    <li>
                        <a>
                            <ExchangeIcon className="h-7 w-7"/>
                            Size exchange
                        </a>
                    </li>
                    <li>
                        <a>
                            <RepairIcon className="h-7 w-7"/>
                            Repairs
                        </a>
                    </li>
                    <li>
                        <a>
                            <DemoIcon className="h-7 w-7"/>
                            Demos
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Drawer