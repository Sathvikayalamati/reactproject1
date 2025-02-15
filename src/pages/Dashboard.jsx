import React, { useState } from "react";
import axios from "axios";

function Dashboard() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    address: "",
    country: "",
    file: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post("http://localhost:5000/register", data);
      alert(response.data.message);
    } catch (error) {
      alert("Error registering user");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">Register User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="username" placeholder="Username" onChange={handleChange} required className="w-full p-2 border rounded" />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full p-2 border rounded" />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="w-full p-2 border rounded" />
          
          <div className="flex items-center space-x-4">
            <label className="font-semibold">Gender:</label>
            <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
            <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
            <label><input type="radio" name="gender" value="Other" onChange={handleChange} /> Other</label>
          </div>

          <textarea name="address" placeholder="Address" onChange={handleChange} className="w-full p-2 border rounded"></textarea>

          <select name="country" onChange={handleChange} required className="w-full p-2 border rounded">
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
          </select>

          <input type="file" name="file" onChange={handleFileChange} className="w-full p-2 border rounded" />

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
