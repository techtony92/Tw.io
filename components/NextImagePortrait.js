import React from "react";
import Image from "next/image";
import {motion} from "framer-motion"

const NextImagePortrait = ({className, src, layout, alt, animationProps}) =>{


    return(
        <motion.div
            animate={animationProps.animate}
            transition={animationProps.transition} 
            className={`${className} nextPortrait`}>
            <Image className={className} src={src} layout={layout} alt={alt}/>
        </motion.div>
    )
}


export default NextImagePortrait;