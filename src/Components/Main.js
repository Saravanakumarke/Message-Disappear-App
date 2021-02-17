import React, { useState, useEffect } from "react";
import {ImShocked2} from 'react-icons/im'
import {SiGhostery} from 'react-icons/si'
import {RiGhostFill} from 'react-icons/ri'
import Maincss from './Maincss.css'

export default function App() {
  const [hidetext, setHidetext] = useState(true);
 
  useEffect(() => {
    setTimeout(() => {
      setHidetext(false);
    }, 3000);
  },[]);

  return (
      <>
    <div className="App" >
     {hidetext ?<div>
        
          <div className="messagetext">
         <h1> Message</h1> 
         <SiGhostery color="rgb(252, 5, 219" size={100}  className="happyghost"/>
         <div className="errortimeout"> <p className="err">Message will disappear in 3 seconds. </p></div>     
         </div>
         </div>:
     <div className="errorpage">
         <div className="error">
             <span className="errortext">410: Gone!</span><ImShocked2 color="yellow" size={40}  />
        </div> 
        <RiGhostFill color="rgb(252, 5, 219" size={100} className="sadghost"/>
        <div className="errortime"> <p className="err">This message may or may not have existed. We can't be sure.</p></div>     
     </div>}
    
    </div>
    </>
  );
}