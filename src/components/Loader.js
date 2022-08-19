import React from "react";


export const Loader = ({loading}) => {

    if(loading){
        return (
            <>
            <img src="loader.gif" alt="loader" className="fixed top-0 left-0 h-full w-auto" />
            </>
        )
    }

    else {
        return (
            <>
            </>
        )
    }
};

export default Loader;