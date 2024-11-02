import { useState } from "react";
import Link from "./link/Link";
import {CiMenuFries } from 'react-icons/ai';


const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Profile", path: "/profile" }
      ];
      
      
      
    return (
            <nav>
          <div onClick={() => setOpen(!open)}>
            {
                open === true ? 'open' : 'close'
            }
          <CiMenuFries></CiMenuFries>
          </div>
          <ul className={`md:flex absolute duration-1000
          ${open ? '' : 'hidden'}
          bg-yellow-200 px-06 shadow-lg`}>
                {
                    routes.map (route => <Link key={route.id}
                route={route}></Link>)
                }
            </ul>
        
           

           
         
            </nav>
    );
};

export default Navbar;