import React from "react";
import { Parallax } from 'react-scroll-parallax';

export const ParallaxBox = () => {

      return (
        <div className="flex items-center justify-center bg-hero-pattern bg-cover bg-center h-screen bg-no-repeat overflow-hidden">
          <Parallax speed={-10}>
            <div className="flex items-center justify-center h-auto w-auto bg-salmon-400 rounded-md text-slate-100 shadow-md p-2 m-2 xl:m-12 xl:p-12">
             <p className="text-center text-md xl:text-2xl font-semibold">
                Beyond Programming
             </p>
            </div>
          </Parallax>
          <div className="flex flex-col">
            <Parallax speed={-15}>
              <div className="flex items-center justify-center h-auto w-auto bg-darkBlue-400 rounded-md text-slate-100 shadow-md p-2 m-2 xl:m-12 xl:p-12">
                <p className="text-center text-md xl:text-2xl font-semibold">
                  5 Years Online Marketing Experience
                </p>
              </div>
            </Parallax>
            <Parallax speed={-15}>
              <div className="flex items-center justify-center h-auto w-auto bg-specialPurple-400 rounded-md text-slate-100 shadow-md p-2 m-2 xl:m-12 xl:p-12">
                <p className="text-center text-md xl:text-2xl font-semibold">
                  Fluent French and English, German in progress
                </p>
              </div>
            </Parallax>
            <Parallax speed={-15}>
              <div className="flex items-center justify-center h-auto w-auto bg-specialIndigo-400 rounded-md text-slate-100 shadow-md p-2 m-2 xl:m-12 xl:p-12">
                <p className="text-center text-md xl:text-2xl font-semibold">
                  Master in European Business Law
                </p>
              </div>
            </Parallax>
          </div>
        </div>
      );
}

export default ParallaxBox;
