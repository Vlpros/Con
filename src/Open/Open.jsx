import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Open.css";
import App from "../App";




const Open = () => {
    let enterButton = () => {
        let pass = document.getElementById('password').value
        let main = document.getElementById('main')
        let headerOpen =document.getElementById('header')
        let contentOpen =document.getElementById('content')
        if (pass === "4716543") {
           
            headerOpen.hidden =false
            contentOpen.hidden = false
            
        } else {
            alert('Неверный пароль')
            pass= "";
        }
    }














    return (
        <div className="app-open">

            <input id="password" type='password' className="inputOpen" />
            <button id="enter" className="buttonOpen" onClick={enterButton}>Enter</button>

            
           

        </div>
    )
}








export default Open





