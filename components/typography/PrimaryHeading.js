import React, {Fragment, useState, useEffect, useRef} from "react";

const PrimaryHeading = ({className, label}) =>{
   

    return(
        <h1 className={`${className}`}>{label}</h1>
    )
}

export default PrimaryHeading;