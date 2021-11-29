import {useEffect,useRef} from "react";
import Head from 'next/head'
import Image from 'next/image'
import NavBar from "../components/NavBar";
import LandingCanvas from "../components/LandingCanvas";
import NextImagePortrait from "../components/NextImagePortrait";
import PrimaryHeading from "../components/typography/PrimaryHeading";
import SecondaryHeading from "../components/typography/SecondaryHeading";
import SectonHeading from "../components/typography/SectionHeading";
import ReactLogo from "../localAssets/image/React-logo.svg";
import styles from '../styles/Home.module.css'
import { linearSlow } from "../animations/motion/motionTransitions";
import { rotate_Full } from "../animations/motion/motionAnimations";
export default function Home() {
 

  return (<>
      <NavBar />
      <div className="landing">
        <LandingCanvas/>
          <NextImagePortrait animationProps={{animate: rotate_Full, transition:linearSlow}} layout={"fill"} src={ReactLogo} className={"decorLogo decorLogoReact"} alt="" />
          <PrimaryHeading className={"primaryHeading mainTitle"} label={"Hi, I'm Tony, A Web Developer"}/>
      </div>
  </>
  )
}
