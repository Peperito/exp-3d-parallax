import React from "react";

export const NavBar = () => {
    return (
        <div className="flex flex-row top-0 max-w-screen h-20 bg-indigo-900 items-center justify-between">
            <h2 className="scale-50  xl:scale-100 ml-2 xl:ml-8 font-semibold text-3xl 2xl:text-4xl text-center text-transparent bg-gradient-to-r from-purple-400 to-orange-600 bg-clip-text">
                Vincent Perriot Web Development
            </h2>
            <button className="navButton scale-75 xl:scale-100 text-md xl:text-xl border-b-4 border-blue-700 hover:border-blue-500">
                Contact Me
            </button>
        </div>
    )
}

export default NavBar;
