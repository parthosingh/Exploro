import { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    axios.post('http://localhost:5000/api/auth/signup', { email, password })
      .then(response => {
        // Handle user registration success
        console.log('User signed up', response.data);
      })
      .catch(error => {
        console.error('Error signing up', error);
      });
  };

  return (
    <div>
      <h2>Signup</h2>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default Signup;
