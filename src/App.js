import './App.css';
import Spline from '@splinetool/react-spline';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import React, {useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import Projects from './components/Projects';
import { Loader } from './components/Loader';

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

  return (
    <AnimatePresence>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}>
         <main className="bg-hero-pattern bg-cover bg-no-repeat bg-center overflow-x-hidden h-auto w-auto transition-all">
          <NavBar />
          <Hero />

        <div className="invisible xl:visible fixed bottom-1 right-1 group scale-50 group translate-x-12 translate-y-12 z-50">
        <Spline scene="https://prod.spline.design/o2HsbLEwYAeyvbde/scene.splinecode" />
        <p className="invisible xl:visible transition-all text-center scale-0 group-hover:scale-100 bg-orange-200 text-slate-900 fixed bottom-10 right-48 p-6 rounded-md shadow-md w-48">
          Currently learning more about 3D!
        </p>
        </div>
        </main>
        <div className="z-20">
        <Projects />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
