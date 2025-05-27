"use client"
import { useEffect, useState } from "react";
import Image from 'next/image';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);


  
useEffect(() => {
  const mediaQuery = window.matchMedia("(min-width: 768px)");

  // ✅ Open if large screen
  setIsOpen(mediaQuery.matches);

  const handler = (e: MediaQueryListEvent) => setIsOpen(e.matches);
  mediaQuery.addEventListener("change", handler);

  return () => {
    mediaQuery.removeEventListener("change", handler);
  };
}, []);


  return (
    <>
      {/* Toggle Button (visible only on small screens) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="navIcon fixed top-4 left-4 z-50 text-white px-3 py-2 rounded shadow md:hidden"
      >
       {isOpen ? <i className="fa fa-times" aria-hidden="true"></i> : <i className="fa fa-bars" aria-hidden="true"></i> }

      </button>

      {/* Sidebar */}
      <aside
        className={`sideBar fixed top-0 left-0 h-screen w-64 bg-white shadow z-40 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-3 font-bold text-lg ">
          <div className="logo">
            <Image 
        src="/logo.png" 
        alt="Logo" 
        width={35} 
        height={35} 
      />
      <h2>A BIBUAIN</h2>
          </div>
        </div>
        <nav className="p-7 space-y-1">
          <a href="#" className="nav-child active block text-gray-700 ">
           <i className="fa fa-home" aria-hidden="true"></i> Dashboard
          </a>
          <a href="#" className="nav-child block text-gray-700 ">
            <i className="fa fa-link" aria-hidden="true"></i> Coin Exchange
          </a>
          <a href="#" className="nav-child block text-gray-700 ">
            <i className="fa fa-university" aria-hidden="true"></i> Bank Management
          </a>

          <a href="#" className="nav-child block text-gray-700 ">
            <i className="fa fa-inbox" aria-hidden="true"></i> Inbox
          </a>

            <a href="#" className="nav-child block text-gray-700 ">
            <i className="fa fa-cog" aria-hidden="true"></i> Setting
          </a>
         
        </nav>
      </aside>
    </>
  );
}
