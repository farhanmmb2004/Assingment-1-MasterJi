import './App.css'
import { NavLink } from 'react-router-dom'
function App() {
  return(<>
  <nav>
    <NavLink to='/otp-form'>otp</NavLink>
    <br />
    <NavLink to='course-list'>courses</NavLink>
    <br />
    <NavLink to='batches'>batches</NavLink>
  </nav>
    </>
  )
}

export default App
