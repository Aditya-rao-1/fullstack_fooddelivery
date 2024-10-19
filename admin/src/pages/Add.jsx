import React, { useState } from 'react';
import axios from 'axios';

const Add = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    small: '',
    medium: '',
    large: '',
    img: ''
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, img: reader.result.split(',')[1] });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name,img, description, category, small, medium, large } = formData;

    const options = {
      small: parseFloat(small),
      medium: parseFloat(medium),
      large: parseFloat(large)
    };

    try {
      const response = await axios.post('http://localhost:8080/upload', { name, description, category, options, img });
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="p-8 flex justify-center">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full space-y-6">
        <div className="flex flex-col items-center">
          <label htmlFor="image" className="cursor-pointer">
            <img src={formData.img ? `data:image/png;base64,${formData.img}` : 'https://via.placeholder.com/150'} alt="Preview" className="w-20 h-20 mb-2" />
            <p className="text-sm text-gray-600">Upload Image</p>
          </label>
          <input type="file" id="image" onChange={handleImageChange} required hidden />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
          <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Name' required className="border border-gray-300 rounded-md w-full p-2" />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Product Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} rows="6" placeholder='Write content here' required className="border border-gray-300 rounded-md w-full p-2"></textarea>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
          <input type="text" name='category' value={formData.category} onChange={handleChange} placeholder='Category' required className="border border-gray-300 rounded-md w-full p-2" />
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Price (Small)</label>
            <input type="number" name='small' value={formData.small} onChange={handleChange} placeholder='Small' required className="border border-gray-300 rounded-md w-full p-2" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Price (Medium)</label>
            <input type="number" name='medium' value={formData.medium} onChange={handleChange} placeholder='Medium' required className="border border-gray-300 rounded-md w-full p-2" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Price (Large)</label>
            <input type="number" name='large' value={formData.large} onChange={handleChange} placeholder='Large' required className="border border-gray-300 rounded-md w-full p-2" />
          </div>
        </div>
        <button type="submit" className="w-full bg-orange-500 text-white rounded-md p-3 hover:bg-orange-600 transition-all duration-300">
          Add Food Item
        </button>
      </form>
    </div>
  );
};

export default Add;
