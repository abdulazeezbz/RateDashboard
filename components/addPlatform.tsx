'use client'
import React from 'react'
import CustomSelect from './DropDownSelect'



const NewPlatform = () => {

       const handleSelection = (value: string) => {
    console.log('Selected:', value);
  };

  return (
    <>
     <div className='addPlatform'>
          <p><i className='fa fa-add'></i> Add Platform</p>
      </div>
  
    <div className="form-top">
      <div>
        <p>All Platforms</p>
        </div>
      <div>
             <CustomSelect
                    label="Currency"
                    options={['EUR', 'GBP', 'NGN']}
                    onSelect={handleSelection}
                  />          
      </div>
    </div>

    <div className='pricing'>
      <div className='child'>
        <p>USD Price</p>
        <p className='font-bold'>$6425.85</p>
      </div>

       <div className='child'>
        <p>NGN Price</p>
        <p className='font-bold'>&#8358;4867634.85</p>
      </div>
    </div>



    <div className='pricing b'>
 
 <div className='child'>
        <p className='font-bold'>Market Price</p>

      
        <p className='text-slate-500'>Percentage (%)</p>
        <input placeholder='Enter Mockup Percentage' className='shadow p-2' type='text' />
      </div>

 <div className='child'>
        <p className='font-bold text-transparent'>.</p>

      
        <p className='text-slate-500'>Value (&#8358;)</p>
        <input placeholder='Markup Value in &#8358;' className='shadow p-2' type='text' />
      </div>

       
    </div>



      <div className='pricing b'>
 
 <div className='child'>
        <p className='font-bold'>Rate</p>

      
        <p className='text-slate-500'>Buy Rate ($)</p>
        <input placeholder='Sell Cost Price in $' className='shadow p-2' type='text' />
      </div>

 <div className='child'>
        <p className='font-bold text-transparent'>.</p>

      
        <p className='text-slate-500'>Sell rate (&#8358;)</p>
        <input placeholder='Sell Cost Price in &#8358;' className='shadow p-2' type='text' />
      </div>

       
    </div>


    
    </>
  )
}

export default NewPlatform