import React from "react";
import Spline from '@splinetool/react-spline';
import PostgresImg from "../img/postgres.png";
import nodeimg from "../img/node.png";

export const Hero = () => {

    return (
        <div className="flex xl:flex-row flex-col justify-start ">
            <div className="scale-50 xl:scale-100 -translate-x-20 xl:translate-x-4" >
                <div className="scale-75 xl:scale-100">
                <Spline scene="https://prod.spline.design/PeoY1AdyiFikuqYF/scene.splinecode" />
                </div>
            </div>
        </div>
    )
}

export default Hero;