import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TfiHome } from 'react-icons/tfi'
import "../styles/sidebar.css"

import Logo from '../assets/icon.png'
import { IconBase } from "react-icons";

interface IProps {
    //handleClick: () => MouseEvent;
}


export const sidebar_links = [
    { name: 'Home', to: '/', icon: TfiHome }
]


const NavLinks = ( {  }) => (
    <div className="sidebar_navlinks">
        {sidebar_links.map((link) => (
            <NavLink key={link.name}  to={link.to}>
                <div className="link">
                    <link.icon className="icon" />
                    {link.name}
                </div>
            </NavLink>
        ))}
    </div>
)

const Sidebar = () => {
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

    return (
        <>
            <div className="sidebar_main">
                <img src={Logo} alt="logo" className="sidebar_logo" />
                <NavLinks />
            </div>

            <div className="sidebar_mobile">
                
            </div>
        </>
    )
}

export default Sidebar;