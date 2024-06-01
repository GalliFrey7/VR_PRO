import React, { useState } from 'react';

const Order = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission
      console.log('Form submitted', { name, email, quantity });
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!name) {
      errors.name = 'Name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }
    if (quantity <= 0) {
      errors.quantity = 'Quantity must be greater than 0';
    }
    return errors;
  };

  return (
    <div className="order-page text-black bg-white">
      <section className="hero flexCenter h-screen text-black text-center relative" style={{ backgroundColor: '#f5f5f7', padding: '20px' }}>
        <div className="max-container">
          <h1 className="h1 text-black">Pre-order Innovatech VR Pro</h1>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
            <div className="mb-4">
              <label className="block text-left mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2" htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                className="w-full p-2 border border-gray-300 rounded"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
              />
              {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity}</p>}
            </div>
            <button type="submit" className="btn_white_hover w-full">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Order;
