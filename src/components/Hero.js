import React from "react";
import Spline from '@splinetool/react-spline';
import PostgresImg from "../img/postgres.png";
import nodeimg from "../img/node.png";
import tailwindimg from "../img/tailwind.png"
import typescriptimg from "../img/typescript.png";
import reactimg from "../img/react.png";
import redisimg from "../img/redis.png";
import { motion } from "framer-motion";

export const Hero = () => {

    return (
        <div className="flex xl:flex-row flex-col justify-start ">
            <div className="scale-50 xl:scale-100 -translate-x-20 xl:translate-x-4" >
                <div className="scale-75 xl:scale-100">
                <Spline scene="https://prod.spline.design/PeoY1AdyiFikuqYF/scene.splinecode" />
                </div>
            </div>

            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 4}}>
            <div className="flex flex-row flex-wrap xl:my-24 mx-12 mr-14 p-6 bg-white bg-opacity-20 rounded-md shadow-md max-w-md">
                <button className="hover:bg-white rounded-xl hover:bg-opacity-20">
                    <img src={redisimg} alt="redis" className="h-20 w-20 mx-4 " /> 
                </button>
                <button className="hover:bg-white rounded-xl hover:bg-opacity-20">
                    <img src={PostgresImg} alt="postgres" className="h-20 w-20 mx-4 mt-4" /> 
                </button>
                <button className="hover:bg-white rounded-xl hover:bg-opacity-20">
                    <img src={nodeimg} alt="node" className="h-20 w-20 mx-4" /> 
                </button>
                <button className="hover:bg-white rounded-xl hover:bg-opacity-20">
                    <img src={reactimg} alt="react" className="h-20 w-20 mx-4" /> 
                </button>
                <button className="hover:bg-white rounded-xl hover:bg-opacity-20">
                    <img src={tailwindimg} alt="tailwind" className="h-18 w-20 mx-4" /> 
                </button>
                <button className="hover:bg-white rounded-xl hover:bg-opacity-20">
                    <img src={typescriptimg} alt="ts" className="h-20 w-20 mx-4" /> 
                </button>
            </div>
            </motion.div>
        </div>
    )
}

export default Hero;