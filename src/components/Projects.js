import React, {useState} from "react";
import { motion } from "framer-motion";
import shopifastImg from "../img/shopihomepage.png";
import unitimg from "../img/unit.png";

export const Projects = () => {

    const [selection, setSelection ] = useState('shopifast');

    const ProjectButton = () => {
        return (
        <div className="grid items-start justify-center">
        <div className="relative m-4">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-orange-600 rounded-lg blur"></div>
                <button className="relative px-7 py-6 bg-indigo-800 rounded-lg leading-none flex divide-x-2 divide-gray-400 mx-0 items-center">
                    <span onClick={() => setSelection('shopifast')} className="text-orange-300 pr-20 underline font-semibold">Shopifast </span>
                    <span onClick={() => setSelection('unit')} className="text-indigo-200 pl-24 underline font-semibold">Unit</span>
                </button>
            </div>
        </div>
        )
    }


    const Unit = () => {

        if (selection !== 'unit') {
            return <></>
        }

        return (
            <div className="flex flex-col xl:flex-row justify-around xl:ml-8">
                <div className="relative m-6 xl:w-3/5 xl:flex">
                    <div className="absolute -inset-3 bg-gradient-to-r from-purple-400 to-orange-600 rounded-lg blur"></div>
                    <img className="relative xl:h-half-screen xl:w-full" src={unitimg} alt="unitimg" />
                </div>

                <div className="flex flex-col p-6 mx-12 my-4 bg-white bg-opacity-30 rounded-md shadow-xl grow self-stretch text-center text-orange-100">
                    <h2 className="text-2xl my-8"> Unit the new fitness App</h2>
                    <h3 className="text-xl mb-6"> Track your progress and map it in 3D! </h3>
                    <p className="text-lg mb-12">Example text to be filled later with description </p>
                    <a className="underline" href="https://github.com/Peperito/e-commerce-project"> Learn more on my GitHub</a>
                
                </div>
            </div>
        )

    }

    const Shopifast = () => {

        if (selection !== 'shopifast') {
            return <></>
        }

        return (
            <div className="flex flex-col xl:flex-row justify-around xl:ml-8">
                <div className="relative m-6 xl:w-3/5 xl:flex">
                    <div className="absolute -inset-3 bg-gradient-to-r from-purple-400 to-orange-600 rounded-lg blur"></div>
                    <img className="relative xl:h-half-screen xl:w-full" src={shopifastImg} alt="shopiImg" />
                </div>

                <div className="flex flex-col p-6 mx-12 my-4 bg-white bg-opacity-30 rounded-md shadow-xl grow self-stretch text-center text-orange-100">
                    <h2 className="text-2xl my-8"> Shopifast, shop fast</h2>
                    <h3 className="text-xl mb-6"> E-commerce Project </h3>
                    <p className="text-lg mb-12">Example text to be filled later with description </p>
                    <a className="underline" href="https://github.com/Peperito/e-commerce-project"> Learn more on my GitHub</a>
                
                </div>
            </div>
        )


    }

    return (
        <div className="max-h-screen my-6">
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2}}>
            <ProjectButton />
            <Shopifast />
            <Unit />
        </motion.div>
        </div>
    )
}

export default Projects;
