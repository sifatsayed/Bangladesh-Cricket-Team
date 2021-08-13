import './App.css';
import { useEffect, useState } from 'react';
import Player from './components/Player/Player';
import Cart from './components/Cart/Cart';

function App() {
  const [players , setPlayers] = useState([])
  useEffect(() =>{
    fetch(`https://mocki.io/v1/06fb333a-eca4-4686-86e6-dd3fc33cfac0`)
    .then(res => res.json())
    .then(data => setPlayers(data))
  },[])

  const [cart,setCart] = useState([])
 const handleAddPlayer =(player)=>{
   const newCart = [...cart , player]
   setCart(newCart)
 }

 const [team , setTeam] = useState([])
 const addMember = (name) =>{
  const newTeam = [...team ,name]
  setTeam(newTeam)
 }
  return (
    <div className="players-container">
      <h2>Bangladesh Cricket Team</h2>
      <Cart cart={cart}></Cart>  
      <ul>
        {
          team.map((m,idx) =><li key={idx}>{m}</li>)
        }
      </ul>
      {
        players.map(player =><Player addMember={addMember} player = {player} handleAddPlayer={handleAddPlayer}></Player>)
      }  
         
    </div>
  );
}

export default App;
