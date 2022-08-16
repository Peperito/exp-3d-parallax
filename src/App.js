import Spline from '@splinetool/react-spline';
import './App.css';

function App() {
  return (
    <main className="bg-superdark-400 overflow-auto h-screen max-w-screen">
    <div className="grid grid-cols-4 justify-items-stretch text-slate-200">
        <div className="col-span-3 mt-8">
          <h1 className='text-center  text-3xl'> VINCENT PERRIOT FULL STACK WEB DEVELOPPER </h1>
        </div>
        <div>
          <button className=" bg-slate-600 mt-6 p-2 mr-2 rounded-md">Contact Me</button>
        </div>
        <div className=' text-center mt-20 ml-6 py-24'>
          <h2 className="mb-12 font-bold text-xl">Building tailor-made solution <br></br>
            from DataBase to Front-End design</h2>
            <h3>Up to date learning on the latest technologies, to build fast and reliable websites </h3>
        </div>
        <div className="col-span-4 justify-self-center xl:col-span-3 scale-50 md:scale-50 xl:scale-100 mt-20 overflow-x-hidden">
        <Spline scene="https://prod.spline.design/0KewYMMUS1B9S-CM/scene.splinecode" />
        </div>
        <div className="col-span-4 text-center p-8">
          There will be something cool here
        </div>
    </div>
    </main>
  );
}

export default App;
