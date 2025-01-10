import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import DashboardWithHeader  from './pages/Dashboard'

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<DashboardWithHeader  />} />
        </Routes>
      </Router>
    </div>

  )
}

export default App
