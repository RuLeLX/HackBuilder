import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Head from './Components/head'
import Location from './Components/location';
/*Bootstrap*/ 
import 'bootstrap/dist/css/bootstrap.min.css';
import Quest1 from './Components/quest1'
import MapPoint from './Components/MapPoint';
import Menu  from './Components/Menu';

const root = ReactDOM.createRoot(document.getElementsByTagName('body')[0]);
let flag = true;

root.render(
  <div>
    <div id="main_content">
      <Head/>
      
      <div className='bg-primary w-100 p-5' id="Map">

      <div id="MapPoint_Menu" className='d-flex'>
          <MapPoint onClick={()=>{
                  let MapPoint = document.getElementById('MapPoint');
                  let Menu = document.getElementById('Menu');
                  MapPoint.style.transition = '.2s';
                  if (flag) {
                    MapPoint.style.transform = 'rotate(360deg)';
                    Menu.style.transition = '1s';
                    Menu.style.width = '500px';
                  } else {
                    MapPoint.style.transform = 'rotate(-360deg)';
                    Menu.style.width = '0px';
                  } 
                  flag = !flag; 
                    }}
          />
          <Menu/>
      </div>

      </div>
      <Location onClick={()=>{
        flag = !flag;
        document.getElementById('main_content').hidden = !flag;
        document.getElementById('quest_for_user').hidden = flag;
      }}/>
    </div>
    
    <div id="quest_for_user" hidden>
      <Quest1/>
    </div>
  </div>
 
  
);

reportWebVitals();
