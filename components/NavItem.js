import React, {Fragment} from "react";
import Link from "next/link";

const NavItem = ({Icon,label, path}) =>{
    
    return(
        <li className="navItem">{Icon !== undefined ? Icon :""}<Link passHref={false} href={path}>{label}</Link></li>
    )

}

export default NavItem;