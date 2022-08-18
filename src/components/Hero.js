import React, {useState} from "react";
import Spline from '@splinetool/react-spline';
import PostgresImg from "../img/postgres.png";
import nodeimg from "../img/node.png";
import tailwindimg from "../img/tailwind.png"
import typescriptimg from "../img/typescript.png";
import reactimg from "../img/react.png";
import redisimg from "../img/redis.png";
import { motion } from "framer-motion";

export const Hero = () => {

    const [selection, setSelection] = useState('none');

    const TextBox = () => {
        if (selection === 'none'){
            return (<></>)
        }
        if(selection === 'redis'){
            return (
                <div className="bg-white bg-opacity-20 rounded-md shadow-md text-orange-100 drop-shadow-lg text-xl text-semibold m-6 p-4 text-center">
                    <p> 
                        Implemented Redis in several projects to optimise latency. <br />
                        Studied intensively with Redis University. <br />
                        Currently working on obtaining certification. <br />
                    </p>
                </div>
            )
        }
        if(selection === 'postgres'){
            return (
                <div className="bg-white bg-opacity-20 rounded-md shadow-md m-6 p-4 text-orange-100 drop-shadow-lg text-xl text-semibold text-center">
                    <p> 
                        Built DataBase with Postgres from scratch for several projects. <br />
                        Optimised indexes and automation with functions and triggers. <br />
                        Primarly using SQL but currently checking out ORMs. <br />
                    </p>
                </div>
            )
        }
        if(selection === 'node'){
            return (
                <div className="bg-white bg-opacity-20 rounded-md shadow-md m-6 p-4 text-orange-100 drop-shadow-lg text-xl text-semibold text-center">
                    <p>
                        From scratch creation of several Express Servers. <br />
                        Well optimised API, easy to request and secure. <br />
                        Security design first, with CORS, Helmet and BCrypt.<br />
                    </p>
                </div>
            )
        }
        if(selection === 'react'){
            return (
                <div className="bg-white bg-opacity-20 rounded-md shadow-md m-6 p-4 text-orange-100 drop-shadow-lg text-xl text-semibold text-center">
                    <p> 
                        Beautiful, functionnal and reliable Front-End.<br />
                        Experience with many libraries and constantly looking for more.<br />
                        Experience React Queries and Redux.<br />
                    </p>
                </div>
            )
        }
        if(selection === 'tailwind'){
            return (
                <div className="bg-white bg-opacity-20 rounded-md shadow-md m-6 p-4 text-orange-100 drop-shadow-lg text-xl text-semibold text-center">
                    <p> 
                        I use Tailwind for speed and ease of use <br />
                        Experience building with FlexBox and Grid <br />
                        This whole website was styled using Tailwind <br />
                    </p>
                </div>
            )
        }
        if(selection === 'typescript'){
            return (
                <div className="bg-white bg-opacity-20 rounded-md shadow-md m-6 p-4 text-orange-100 drop-shadow-lg text-xl text-semibold text-center">
                    <p> 
                        Currently learning more about TypesScript <br />
                        Goal is to build end-to-end typesafe FullStack app <br />
                        Experience with basic Type operations<br />
                    </p>
                </div>
            )
        }
        
    }

    const Buttons = () => {
        if(selection === 'none'){
        return (
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 4}}>
                <div className="flex flex-row flex-wrap mb-4 xl:my-24 mx-12 mr-14 p-6 bg-white bg-opacity-20 rounded-md shadow-md max-w-sm">
                    <button className="hover:bg-white rounded-xl hover:bg-opacity-20" onClick={() => setSelection('redis')} >
                        <img src={redisimg} alt="redis" className="h-12 w-12 xl:h-20 xl:w-20 mx-2 my-2" /> 
                    </button>
                    <button className="hover:bg-white rounded-xl hover:bg-opacity-20" onClick={() => setSelection('postgres')}>
                        <img src={PostgresImg} alt="postgres" className="h-12 w-12 xl:h-20 xl:w-20 mx-4 mt-4 my-2 " /> 
                    </button>
                    <button className="hover:bg-white rounded-xl hover:bg-opacity-20" onClick={() => setSelection('node')}>
                        <img src={nodeimg} alt="node" className="h-12 w-12 xl:h-20 xl:w-20 mx-2 my-2 " /> 
                    </button>
                    <button className="hover:bg-white rounded-xl hover:bg-opacity-20" onClick={() => setSelection('react')} >
                        <img src={reactimg} alt="react" className="h-12 w-12 xl:h-20 xl:w-20 mx-2 my-2"  /> 
                    </button>
                    <button className="hover:bg-white rounded-xl hover:bg-opacity-20" onClick={() => setSelection('tailwind')} >
                        <img src={tailwindimg} alt="tailwind" className="h-12 w-12 xl:h-18 xl:w-20 mx-4 my-2 " /> 
                    </button>
                    <button className="hover:bg-white rounded-xl hover:bg-opacity-20" onClick={() => setSelection('typescript')} >
                        <img src={typescriptimg} alt="ts" className="h-12 w-12 xl:h-20 xl:w-20 mx-2 my-2 " /> 
                    </button>
                </div>
                </motion.div>
        )
        }
        if(selection !== 'none'){
            return(
            <div className="flex flex-row bg-white bg-opacity-20 rounded-md shadow-md max-h-28 m-6">
            <button className="hover:bg-white flex justify-center rounded-xl hover:bg-opacity-20" onClick={() => setSelection('redis')} >
                <img src={redisimg} alt="redis" className="h-12 w-12 xl:h-20 xl:w-20 mx-2 my-2 s" /> 
            </button>
            <button className="hover:bg-white flex justify-center rounded-xl hover:bg-opacity-20" onClick={() => setSelection('postgres')}>
                <img src={PostgresImg} alt="postgres" className="h-12 w-12 xl:h-20 xl:w-20 mx-4 mt-4 my-2" /> 
            </button>
            <button className="hover:bg-white flex justify-center rounded-xl hover:bg-opacity-20" onClick={() => setSelection('node')}>
                <img src={nodeimg} alt="node" className="h-12 w-12 xl:h-20 xl:w-20 mx-2 my-2 " /> 
            </button>
            <button className="hover:bg-white flex justify-center rounded-xl hover:bg-opacity-20" onClick={() => setSelection('react')} >
                <img src={reactimg} alt="react" className="h-12 w-12 xl:h-20 xl:w-20 mx-2 my-2"  /> 
            </button>
            <button className="hover:bg-white flex justify-center rounded-xl hover:bg-opacity-20" onClick={() => setSelection('tailwind')} >
                <img src={tailwindimg} alt="tailwind" className="h-12 w-12 xl:h-18 xl:w-20 mx-4 my-2 xl:mt-6" /> 
            </button>
            <button className="hover:bg-white flex justify-center rounded-xl hover:bg-opacity-20" onClick={() => setSelection('typescript')} >
                <img src={typescriptimg} alt="ts" className="h-12 w-12 xl:h-20 xl:w-20 mx-2 my-2" /> 
            </button>
        </div>
        )}
    }

    return (
        <div className="flex xl:flex-row flex-col justify-start">
            <div className="scale-50 xl:scale-100 -translate-x-20 xl:translate-x-4" >
                <div className="scale-75 xl:scale-100">
                <Spline scene="https://prod.spline.design/PeoY1AdyiFikuqYF/scene.splinecode" />
                </div>
            </div>
            <div>
                <Buttons />
                <TextBox />
            </div>
        </div>
    )
}

export default Hero;
