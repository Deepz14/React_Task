import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notification from "../utils/Notification";
import { useNotification } from "../context/NotificationContext";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const showNotification = useNotification();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'Admin' && password === 'Admin') {
      setError('');
      showNotification('You have successfully logged in');
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
    setError('');
  }

  const OnPasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  }

    return (
    <div className="flex items-center justify-center p-4 overscroll-none h-screen">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={onUsernameChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={OnPasswordChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleLogin} disabled={!username || !password}
          className={`w-full bg-blue-500 text-white py-3 rounded-lg ${!username || !password ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Login
        </button>
        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
