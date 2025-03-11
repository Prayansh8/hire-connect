import React, { useState } from 'react';

interface AuthFormProps {
  isRegistering: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isRegistering }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Job Seeker');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const endpoint = isRegistering ? '/api/auth/register' : '/api/auth/login';
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, role }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white rounded-lg p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{isRegistering ? 'Register' : 'Login'}</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full mb-4 p-2 border rounded" required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full mb-4 p-2 border rounded" required />
      {isRegistering && (
        <select value={role} onChange={e => setRole(e.target.value)} className="w-full mb-4 p-2 border rounded">
          <option value="Job Seeker">Job Seeker</option>
          <option value="Recruiter">Recruiter</option>
        </select>
      )}
      <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">{isRegistering ? 'Sign Up' : 'Login'}</button>
    </form>
  );
};

export default AuthForm;