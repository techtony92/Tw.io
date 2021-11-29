import React, {Fragment} from "react";


const SectionHeading = ({className, label}) =>{


    return(
        <h1 className={`${className}`}>{label}</h1>
    )
}

export default SectionHeading;