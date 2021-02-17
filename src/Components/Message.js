import React,{useState} from 'react'
import Modal from 'react-modal';
import {GrClose} from 'react-icons/gr'
import { Link} from 'react-router-dom';
import Messagecss from './Messagecss.css'

Modal.setAppElement('#root')
  function Message() {

const [print,setPrint] = useState("message");
const [inp,setInp] = useState("message");
const [modalIsOpen,setModalIsOpen] = useState(false);
const [timevalue,setTimevalue] =useState(1000);
const [text,setText] =useState();

function handleinp(e)
{
    console.log(e.target.value);
    setInp(e.target.value);
    console.log(e.target.value  );
    setPrint(e.target.value);

}

function handlemodel()
{
  if(text===undefined)
  {
      window.alert("Please Enter Message or Link ");
  }
  else
  {
    setModalIsOpen(true);
  }

    
}

function handlemodelclose()
{
    setModalIsOpen(false);
}

function handleTime(val)
{
console.log(val.target.value);
setTimevalue(val.target.value);

}
function handletextbox(val)
{
    console.log(val.target.value);
    setText(val.target.value);
   
}

    return (
        <div className="mainbox">
            <h1 className="textheading">Create a disappearing</h1>
            <div className="radiooption">
                <span className="textopt"> Message</span>
                <input type="radio" 
                value="message"
                checked={inp==="message"}
                onChange={handleinp}
                className="radiobtn"
                />
            </div>
            <div className="radiooption">
                <span className="textopt">Link</span>
                <input type="radio" 
                value="link"
                checked={inp==="link"}
                onChange={handleinp}
                className="radiobtn1"
                />
            </div>
        <div> {print==="message"? <input type="text" className="inputtext" placeholder="What do you want to say?" onChange={handletextbox} required="required"/>:<input type="text" className="inputtext" placeholder="What's the URL?" onChange={handletextbox} required="required"/>}</div>  
          
           <div className="settime">

               <span className="timetext">Self-destruct Timer</span>
               <select onChange={handleTime} className="setectoption">
                   <option>1 Minutes</option>
                   <option>1 Hour</option>
                   <option>1 Day</option>
                   <option>1 Week</option>
               </select>
             
           </div>
           <button onClick={()=>handlemodel()} className="btn">Generate</button>

           

           <Modal isOpen={modalIsOpen} className="model">
           <GrClose 
           color="white"
           className="cancel"
           size={30}
           
           onClick={()=>handlemodelclose()}
           />
           <div className="answertext">
               <h1 className="resulttext">Your {print} has been created</h1>
               <button className="answer"><Link to={print ==="message" ? "/Main" :text } className="linktext">Click Here!</Link></button>
               </div>
              
           </Modal>
           
        </div>
        
    )
}

export default Message;