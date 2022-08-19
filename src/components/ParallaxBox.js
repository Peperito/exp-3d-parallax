import React from "react";
import { Parallax } from 'react-scroll-parallax';

export const ParallaxBox = () => {

      return (
        <div className="flex items-center justify-center bg-hero-pattern bg-cover bg-center h-screen bg-no-repeat overflow-hidden">
          <Parallax speed={-10}>
            <div className="h-32 w-32 bg-slate-100 rounded-lg shadow-md m-12">
             1
            </div>
          </Parallax>
          <div className="flex flex-col">
            <Parallax speed={-15}>
              <div className="h-32 w-32 bg-slate-100 rounded-lg shadow-md m-12">
               2
              </div>
            </Parallax>
            <Parallax speed={-15}>
              <div className="h-32 w-32 bg-slate-100 rounded-lg shadow-md m-12">
               3
              </div>
            </Parallax>
            <Parallax speed={-15}>
              <div className="h-32 w-32 bg-slate-100 rounded-lg shadow-md m-12">
               4
              </div>
            </Parallax>
          </div>
        </div>
      );
}

export default ParallaxBox;
