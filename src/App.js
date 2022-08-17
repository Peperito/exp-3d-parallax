import './App.css';
import Spline from '@splinetool/react-spline';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

function App() {

  return (
    <main className="bg-hero-pattern bg-cover bg-no-repeat bg-center h-screen w-screen overflow-auto">
      <NavBar />
      <Hero />

    <div className="fixed bottom-1 right-1 group scale-50 group translate-x-12 translate-y-12">
    <Spline scene="https://prod.spline.design/o2HsbLEwYAeyvbde/scene.splinecode" />
    <p className="transition-all text-center scale-0 group-hover:scale-100 bg-orange-200 text-slate-900 fixed bottom-10 right-48 p-6 rounded-md shadow-md w-48">
      Currently learning more about 3D!
    </p>
    </div>
    </main>
  );
}

export default App;
