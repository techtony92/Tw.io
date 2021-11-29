import React,{Fragment, useState} from "react";
import Image from "next/image";
import PrimaryHeading from "./typography/PrimaryHeading"; 
import {FaHome, FaTools, } from "react-icons/fa";
import {IoIosSend} from "react-icons/io";
import NavItem from "./NavItem";
import SimpleLogo from "../localAssets/image/main-letter.svg";

const NavBar = () =>{
  const [mobileState, changeMobileState] = useState(false);

  const handleStateChange = (event) =>{
    console.log(event);
    changeMobileState(!mobileState);
  }
    return(
        <Fragment>
            
              <nav className="navBar">
                <div className="navBarLogo simpleLogo">
                  <Image src={SimpleLogo} layout={"fill"} objectFit={"contain"} alt="Simplfied Logo"/>
                </div>
                <PrimaryHeading label={"TDevIO"}/>
                <ul className="listGroup navBarListGroup">
                  <NavItem icon={<FaHome size={25}/>} label={"Home"}  path={"/"}/>
                  <NavItem icon={<FaTools size={25}/>} label={"Tools"} path={"/"} />
                  <NavItem icon={<IoIosSend size={25}/>} label={"Contact"} path={"/"}/>
                </ul>
              </nav>
              <nav className="navBar--mobile navMobile">
                    <div className="navMobileMenu mobileMenu">
                      <div className="mobileMenuHamburger" id="decorLineFront"></div>
                      <input checked={mobileState} onClick={event => handleStateChange(event)} type="checkbox" name="" id="navMobileToggle" className="mobileMenuToggle" />
                    </div>
              </nav>
          
        </Fragment>
    )
} 

export default NavBar;