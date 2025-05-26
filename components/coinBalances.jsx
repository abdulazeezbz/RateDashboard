'use client';
import { useState, useEffect } from 'react';



const BlockGrid = ({ name, change, changeType, costPrice, balance, type,active  }) => {
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    setIsActive(active);
  }, [active]);

  const handleToggle = () => {
    setIsActive(prev => !prev);
  };

 
  return (


   <>

 
     <div className="block-grid">
      <div className="top">
        <div className='tr'>
          <p>{name}</p>
        </div>
        <div className={`rr ${changeType}`}>
          {/* <i className={`fas ${changeType === 'success' ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i> */}
          {type}
        </div>
      </div>

      <div className="bal aa">
        <p className='bal'>Market Price (USD)</p>
        <h3>{balance +" "+ name}</h3>
      </div>

      <div className="bal a">
        <p className='bal'>Cost Price (NGN)</p>
        <h3>{"\u20A6"+costPrice}</h3>
      </div>

       <div className="ex">
      <div className="btn">
        <button className={isActive ? 'act' : 'inact'}>

          <p
  className={`transition-all duration-500 ease-in-out ${
    isActive ? 'text-green-600 opacity-100' : 'text-red-600 opacity-60'
  }`}
>
  {isActive ? 'Active' : 'Inactive'}
</p>
        </button>
      </div>

      <div className="a">
        <label className="switch">
          <input
            type="checkbox"
            id="rateToggle"
            checked={isActive}
            onChange={handleToggle}
          />
          <span className="slider"></span>
        </label>
      </div>
       
      </div>
    </div>
    </>
  );
  
}


export default BlockGrid;