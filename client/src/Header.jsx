// Header.jsx

import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import './Header.css';


export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <header className='flex justify-between items-center'>
        {/* logo */}
        <Link to={'/'} className='flex items-center gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
      <h1>   <span className='font-bold text-xl'>EQUIACCESS</span></h1>
        </Link>
        {/* navbar */}
        <div className='flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300'>
          <Link to="/" className="button-link">
            <button>Home</button>
          </Link>
          <div className="border-l border-gray-300"></div>
          <Link to="/About" className="button-link">
            <button>About Us</button>
          </Link>
          <div className="border-l border-gray-300"></div>
          <Link to="/Contact" className="button-link">
            <button>Contact US</button>
          </Link>
          <div className="border-l border-gray-300"></div>
          <Link to="/Faq" className="button-link">
            <button> FAQ'S</button>
          </Link>
        </div>
        {/* user widget */}
        <Link to={user ? '/account' : '/login'} className='flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <div className='bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
          </div>
          {!!user && (
            <div>
              {user.name}
            </div>
          )}
        </Link>
      </header>
    </div>
  );
}