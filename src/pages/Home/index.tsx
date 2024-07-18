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
      <h1>Rsbuild with React</h1>
      <div>test</div>
      <p>Start building amazing things with Rsbuild.</p>
      <button onClick={enter}>role</button>
    </div>
  )
}

export default App
