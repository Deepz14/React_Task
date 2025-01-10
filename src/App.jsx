import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import DashboardWithHeader  from './pages/Dashboard'
import { NotificationProvider } from './context/NotificationContext';

function App() {
  return (
    <NotificationProvider>
        <div className='bg-gray-100 h-screen'>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<DashboardWithHeader  />} />
            </Routes>
          </Router>
        </div>
    </NotificationProvider>
  )
}

export default App
