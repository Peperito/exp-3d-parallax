import React from "react";

export const NavBar = () => {
    return (
        <div className="flex flex-row top-0 w-screen h-20 bg-indigo-900 items-center justify-between">
            <h2 className="scale-50  xl:scale-100 ml-2 xl:ml-8 font-semibold text-2xl md:text-3xl 2xl:text-4xl text-center text-transparent bg-gradient-to-r from-purple-400 to-orange-600 bg-clip-text">
                Vincent Perriot Web Developpement
            </h2>
            <button className="navButton scale-75 xl:scale-100 text-xl">
                Contact Me
            </button>
        </div>
    )
}

export default NavBar;