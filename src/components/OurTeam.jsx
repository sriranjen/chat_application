import React from 'react'
import sriranjen from '../img/sriranjen.gif'
import santhosh from '../img/santhosh.gif'
import senthil from '../img/senthil.gif'
import abi from '../img/abi.jpeg'
import { useNavigate } from "react-router-dom";
export const OurTeam = () => {
    const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  return (
   
        <div className="ourteam">
        <div class="wrapper">
        <h2>Our Project Team Members</h2>
        <hr/>
        <div class="team-mem" style={{paddingLeft:"18px"}}>
                <img src={sriranjen}/>
                <h4>AR.Sriranjen</h4>
                <p>B.E cse </p>
            </div>
        <div class="members">
           
           
            <div class="team-mem">
                <img src={santhosh}/>
                <h4>E.santhosh Kumar</h4>
                <p>B.E cse</p>
            </div>
            <div class="team-mem">
                <img src={abi}/>
                <h4>M.Abi</h4>
                <p>B.E cse</p>
            </div>
            <div class="team-mem">
                <img src={senthil}/>
                <h4>M.Senthilnathan</h4>
                <p>B.E cse</p>
            </div>
            
        </div>
        <div className="button" style={{margin:"0px",padding:"0px"}}>
          <button onClick={navigateHome} classname="button">
            <span>home</span>
          </button>
        </div>
    </div> 
    
    </div>
    
  )
}
