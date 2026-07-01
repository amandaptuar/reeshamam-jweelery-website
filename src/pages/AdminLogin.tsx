import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';
import logo from '../assets/logo.svg';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple hardcoded auth for demo purposes
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('admin_auth', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="admin-login-page">
      <div className="login-card">
        <img src={logo} alt="Reshma Qureshi Admin Portal Logo" className="login-logo" width="200" height="60" fetchPriority="high" decoding="async" />
        <h2 className="login-title">Admin Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          {error && <div className="login-error">{error}</div>}
          
          <div className="form-group">
            <label>Username</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Enter admin username"
              required 
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter password"
              required 
            />
          </div>
          
          <button type="submit" className="btn-login">Login</button>
        </form>
      </div>
    </div>
  );
}
