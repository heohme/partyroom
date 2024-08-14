import './index.css'
import {
  useNavigate,
} from 'react-router-dom'

const App = () => {
  // throw Error('test');

  const navigate = useNavigate()

  const enter = () => {
    navigate('/role')
  }

  return (
    <div className="content">
      <div className='avatar'>avatar</div>
      <button onClick={enter}>role</button>
    </div>
  )
}

export default App
