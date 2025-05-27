'use client'
import { useState, useEffect } from 'react';
import Sidebar from '@/components/sideBar'
import Topbar from '@/components/topBar'
import BlockGrid from '@/components/coinBalances'
import CollapsedNav from '@/components/collapsedNav';
import NewPlatform from '@/components/addPlatform';
import MyOffers from '@/components/myOffers';
import AlertModal from '@/components/alertModal';
import CostPrice from '@/components/costPriceRate'
import { ButtomNotification } from '@/components/ButtomNotification';

export default function Home() {
  


  const [showPopup, setShowPopup] = useState(false)
  const [showPopupB, setShowPopupB] = useState(false)


  const users = [
  {id:1, platform: "Binance", coin: 'BTC', type: 'Buy', paymentmethod: 'Bank transfer', offer: '64,348,584.50' },
  {id:2, platform: "Paxful", coin: 'BTC', type: 'Sell', paymentmethod: 'Bank transfer', offer: '64,127,000.00' },
];


  const usersn = [
  {id:1, platform: "Main Account", cost: '64,324,092.50', market: '64,324,092.50', coin: '1.0002'},
  {id:2, platform: "Trading Account", cost: '64,172,000.00', market: '64,172,000.00', coin: '0.9876'},
  {id:3, platform: "Reserved Account", cost: '64,257,291.50', market: '64,257,291.50', coin: '0.9989'},
  
];


const handleActivate = () => {
  setShowPopup(true);
  
};

 const handleDeactivate = () => {
   setShowPopupB(true);
  };

  




  const [showNotification, setShowNotification] = useState(false);

//  useEffect(() => {
//     setShowNotification(true);

//     const timer = setTimeout(() => {
//       setShowNotification(false);
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, []);

//   }

 

  
  return (
   <>
     <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

      <div className="main">
        <div className="sideBar">
          <Sidebar></Sidebar>
        </div>
        <div className="content">
          <div className="topNav">
            <Topbar></Topbar>
          </div>





          <div className="dashboard-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <h1 className='heaa'>Managenent Dashboard</h1>
           
            <div>
              <CollapsedNav
  items={[
    { name: 'Bitcoin', title: 'BTC' },
    { name: 'Tether', title: 'USDT' },
    { name: 'Ehereum', title: 'ETH' },
  ]}
/>
            </div>

            <div>
            
            <BlockGrid
            active = {true}
              name= "Binance"
              changeType = "fail"
              balance ="$64,245.65"
              costPrice={"64,324,092.50"}
              type="buy"
              />
       
        <BlockGrid
              name= "Paxful"
              active = {true}
              changeType = "success"
              balance ="$64,198.32"
              type="sell"
              costPrice={"64,243,188.80"}
              />
       
        <BlockGrid
              name= "Noones"
              active = {false}
              changeType = "success"
              balance ="$64,301.78"
              type="Sell"
              costPrice={"64,426,894.40"}
              />
          </div>

          
              {/* ADD Platform */}
     <NewPlatform />



     {/* My Offers */}
     <MyOffers 
     onActivate={handleActivate} 
     onDeactivate={handleDeactivate} 
     users={users}  
     />


{/* CostPrice */}

<CostPrice
usersn={usersn}
/>


          </div>

        

{/* BUTTOM NOTIFICATION */}
 {showNotification && <ButtomNotification />}


        {/* MODAL POPUP */}


{showPopup && (
  <AlertModal
  onConfirm={() => {
setShowPopup(false)
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 5000);
  }
  }

  title="Activate All Offers"
  mini="Are u sure you want to activate all offers?"
  
  onClose={() => {
    setShowPopup(false)

    

    }
  } />
)}


{showPopupB && (
  <AlertModal
  onConfirm={() => {
setShowPopupB(false)
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 5000);
  
  }
  }

  title="Deactivate All Offers"
  mini="Are u sure you want to Deactivate all offers?"
  
  onClose={() => {
    setShowPopupB(false)
  } } />
)}



        </div>
      </div>

      </>
  );
}
