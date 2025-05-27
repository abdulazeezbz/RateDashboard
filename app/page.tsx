
import Sidebar from '../components/sideBar'
import Topbar from '../components/topBar'
import BlockGrid from '../components/coinBalances'
import CollapsedNav from '../components/collapsedNav';
import CustomSelect from '@/components/DropDownSelect';
import NewPlatform from '../components/addPlatform';

export default function Home() {

  
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
              name= "BTC"
              change = "100"
              changeType = "fail"
              balance ="4545"
              costPrice="12343434"
              type="buy"
              />
       
        <BlockGrid
              name= "ABZ"
              active = {true}
              change = "100"
              changeType = "success"
              balance ="4545"
              type="sell"
              costPrice={100034}
              />
       
        <BlockGrid
              name= "ABZ"
              active = {false}
              change = "100"
              changeType = "success"
              balance ="4545"
              type="Sell"
              costPrice={100}
              />
          </div>

          
              {/* ADD Platform */}
     <NewPlatform />






          </div>

      




        </div>
      </div>

      </>
  );
}
