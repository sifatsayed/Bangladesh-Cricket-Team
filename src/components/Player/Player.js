import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Player = (props) => {
   //console.log(props)
    const {image,name,gender,email,salary} = props.player ;
    const handleAddPlayer = props.handleAddPlayer;
    const addMember = props.addMember ;
    return (
        <div className="players">
            <div className="player-container">
  
            <img src={image} alt="" />
            <h5>Name : {name}</h5>
            <p><small>Email : {email}</small></p>
            <p><small>Gender : {gender}</small></p>
            <p>Salary : {salary}</p>
            <button 
            onClick={()=> handleAddPlayer (props.player)} className="main-button">
            <FontAwesomeIcon icon={faCoffee} />
               Add Me</button>
               <br />
               <br />
               <button 
               onClick ={()=> addMember(props.player.name)}
               className="main-button">Player</button>
            </div>
        </div>
    );
};

export default Player;