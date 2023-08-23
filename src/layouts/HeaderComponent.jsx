import { React, useState } from 'react'
import { NavLink as Anchor } from 'react-router-dom';


const HeaderComponent = ({ text, background }) => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full shadow h-[15vh]">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-2 md:py-5 md:block">
            <a href='#' className={`mr-4  font-["Segoe UI"] font-bold text-base`}>
              <h2 className={`text-2xl font-bold text-${text}`}>My Tinerary</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-6 h-6 text-${text}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-6 h-6 text-${text}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <ul className="md:items-center justify-center flex flex-col md:flex-row ">
              <li className='my-2'><Anchor to="/" className={`mr-4  font-["Segoe UI"] font-bold text-base text-${text}`}>Home</Anchor></li>
              <li className='my-2'><Anchor to="/cities" className={`mr-4  font-["Segoe UI"] font-bold text-base text-${text}`}>Cities</Anchor></li>
              <li className='my-2 flex flex-row'><button className='font-["Segoe UI"]  text-base flex flex-row justify-around gap-1 bg-[#4f46e5] hover:bg-[#2D23DF] text-white font-bold py-2 px-7 rounded'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                Login
              </button><img className=" h-10 w-10 ml-2 rounded-full object-cover bg-white" src="https://silviaolmedo.com/wp-content/uploads/2015/11/facebook.jpg"/></li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}



export default HeaderComponent;