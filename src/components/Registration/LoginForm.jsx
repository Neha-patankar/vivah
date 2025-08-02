import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({ mobileNo: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5555/api/login', formData);
      alert('Login Successful');
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      alert('Invalid Credentials');
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input type="text" name="mobileNo" onChange={handleChange} placeholder="Mobile No" required className="mb-2 w-full p-2 border" />
      <input type="password" name="password" onChange={handleChange} placeholder="Password" required className="mb-4 w-full p-2 border" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Login</button>
    </form>
  );
};

export default LoginForm;
