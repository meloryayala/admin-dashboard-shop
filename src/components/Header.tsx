import {FC, JSX} from "react";

interface HeaderProps {
    title?: string;
    pageIcon?: JSX.Element;
}

const Header: FC<HeaderProps> = ({ title, pageIcon}) => {
        return (
        <div className="flex items-center">
            {pageIcon}
            <h1 className="text-2xl font-semibold ml-3">{title}</h1>
        </div>

        // <div className="flex items-center">
        //     <div className="avatar">
        //         <div className="w-16 h-16 rounded-xl mr-4">
        //             <img src="https://source.unsplash.com/random/?old-men/" alt="User photo"/>
        //         </div>
        //     </div>
        //     <div>
        //         <h1 className="text-xl font-semibold">
        //             Hallo Freddy!
        //         </h1>
        //         <p className="text-sm font-regular">Good to see you again!</p>
        //     </div>
        // </div>
    )
}

export default Header;