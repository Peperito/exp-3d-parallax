import React from "react";

export const Projects = () => {

    return (
        <div className="grid items-start justify-center border">
        <div className="relative m-4">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-orange-600 rounded-lg blur"></div>
                <button className="relative px-7 py-6 bg-indigo-800 rounded-lg leading-none flex divide-x divide-gray-600 mx-0 items-center">
                    <span className="text-orange-300 pr-20">Shopifast </span>
                    <span className="text-indigo-200 pl-24">Unit</span>
                </button>
            </div>
        </div>
    )
}

export default Projects;
