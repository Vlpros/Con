import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.css"


const Navbar=()=>{
    return(
<nav className="h">




    <div className="route" >
    <img src="https://sun9-72.userapi.com/s/v1/if2/2n3dhjCes_2H9bcxKAry3NEaoXPwl9uIy7WqTSpz3zIahkuyseAAq6n5zQBQfrjuTSbFRIy8I6M6yVyxivDPqPbg.jpg?size=412x385&quality=96&type=album"/>
    <button id='run' className="btn item">
   
      <NavLink to='/main' >Главная </NavLink>  
    </button>
    <button id='run' className="btn item">
   
   <NavLink to='/port' >Портфель </NavLink>  
 </button>


    
    
    
    
</div>

</nav>

    )
}
export default Navbar