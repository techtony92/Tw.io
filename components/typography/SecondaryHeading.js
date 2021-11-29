import React, {Fragment} from "react";


const SecondaryHeading = ({className, label}) =>{


    return(
        <h2 className={`${className}`}>{label}</h2>
    )
}

export default SecondaryHeading;