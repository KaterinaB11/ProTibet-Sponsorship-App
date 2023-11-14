import React, { useState } from 'react';

export default function Login () {
    const login = ({ onLogin }) => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
      
        const handleLogin = () => {
          // You would typically make a request to your authentication backend here
          // For simplicity, let's assume login is successful and call onLogin
          onLogin({ username });
        };
      
        return (
          <div>
            <h2>Login</h2>
            <label>
              Username:
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button onClick={handleLogin}>Login</button>
          </div>
        );
      };
}