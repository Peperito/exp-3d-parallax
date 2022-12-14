import './App.css';
import Spline from '@splinetool/react-spline';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import React, {useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import Projects from './components/Projects';
import { Loader } from './components/Loader';
import ParallaxBox from './components/ParallaxBox';
import { ParallaxProvider } from 'react-scroll-parallax';
import Footer from './components/Footer';

function App() {

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false)
  }, 2000);

  if(loading){
    return (
      <Loader loading={loading} />
    )
  }

  const width = {
    maxWidth: "2000px",
    margin: "0 auto",
  };


  return (
    <AnimatePresence>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}>
      <NavBar />
        <div style={width}>
         <main className="bg-hero-pattern bg-cover bg-no-repeat bg-center overflow-x-hidden h-auto w-auto transition-all">
          
          <Hero />

          <div className="invisible xl:visible fixed bottom-1 right-1 group scale-50 group translate-x-12 translate-y-12 z-50">
          <Spline scene="https://prod.spline.design/o2HsbLEwYAeyvbde/scene.splinecode" />
          <p className="invisible xl:visible text-xl transition-all text-center scale-0 group-hover:scale-100 bg-orange-200 text-slate-900 fixed bottom-10 right-48 p-6 rounded-md shadow-md w-48">
          Currently learning more about 3D!
          </p>
          </div>
        </main>

        <Projects />

        <ParallaxProvider>
          <ParallaxBox />
        </ParallaxProvider>
        </div>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
