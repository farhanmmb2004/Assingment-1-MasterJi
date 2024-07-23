import './App.css'
import { NavLink } from 'react-router-dom'
function App() {
  return(<>
  <nav>
    <h1><NavLink to='/otp-form' className="option">OTP Task</NavLink></h1>
    <h1><NavLink to='course-list' className="option">COURSE-LIST Task</NavLink></h1>
    <h1><NavLink to='batches' className="option">BATCHES Task</NavLink></h1>
  </nav>
    </>
  )
}

export default App
