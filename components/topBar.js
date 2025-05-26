"use client"
import { useEffect, useState } from "react";
export default function Topbar() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // update every second

    return () => clearInterval(interval); // cleanup
  }, []);

   const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };


  return (
    <header className="dashboard-content nav fixed top-0 left-64 right-0 h-16 shadow bg-white px-6 flex items-center justify-between z-10">
      
      <> <div>
        
        <input
          type="text"
          placeholder="Search..."
          className="border px-2 py-1 rounded"
        />
        </div>

      <div className="flexa justify-center items-center flex">
     
        <h2 className="time"> <i className="fa fa-clock" aria-hidden="true"></i> {formatTime(time)}</h2>&nbsp;
        <h2> <button>Break</button></h2>

        <h2> <button className="second">Clock Out</button></h2>

        <div className="userIcon flex justify-center align-center">
          
          <div><i className="fa fa-user" aria-hidden="true"></i></div>
          
          <div>
            <h2>AbdulABZ</h2>
            <p>Admin</p>
            </div> 
        </div>
        </div>
    
       
      </>
    </header>
  );
}
