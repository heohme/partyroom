import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'

const App = () =>{
  const navigate = useNavigate()

  const enter = () => {
    navigate('/room')
  }
  
  return ( 
    <div className="content">
      Your role is xx,
      link:
      <div className="link-item">角色</div>
      tips:
        you seek A,you afriad B;
        <button onClick={enter}>start</button>
    </div>
  )
}
   

export default App
