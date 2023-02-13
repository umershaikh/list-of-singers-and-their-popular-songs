import Cards from './components/cards';
import { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <div className="bg-gray-700 py-5">
          <div className='w-full'>
            <h1 className='mb-4 text-4xl font-bold text-gray-300 text-center uppercase'>List of Singers & their Popular Songs</h1>
          </div>
          <div className="max-w-8xl px-8">
            <div className="justify-center bg-gray-900 px-10 py-5 hover:shadow-gray-800 shadow-gray-900 shadow-2xl rounded-3xl overflow-hidden relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
                aria-hidden="true"
              >
                <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stopColor="#7775D6" />
                    <stop offset={1} stopColor="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
              <div className='grid grid-cols-4 gap-3'>
                <Cards />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
