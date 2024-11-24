import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'

const App = () =>{
  const navigate = useNavigate()
  const DEFAULT_ROOMS = [
    {
      key: 'room1',
      name: '房间1'
    },{
      key: 'room2',
      name: '房间2'
    },{
      key: 'room3',
      name: '房间3'
    },{
      key: 'room4',
      name: '房间4'
    },
  ]

  const enter = () => {
    navigate('/room')
  }
  
  return ( 
    <div className="content">
      You choose one:
      <div className="roomList">
        {DEFAULT_ROOMS.map(item=>(
          <div className="roomItem">
            {item.name}
          </div>
        ))}
      </div>
      <button onClick={enter}>start</button>
    </div>
  )
}
   

export default App
