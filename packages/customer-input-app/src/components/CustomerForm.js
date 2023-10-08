// packages/customer-input-app/src/components/CustomerForm.js

import React, { useState } from 'react';
import { db } from '../firebase';
import { addDoc, collection } from "firebase/firestore"; 

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    country: '',
    packageType: '',
    branch: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {  // Use async keyword since addDoc is a promise
    e.preventDefault();
  
    try {
      const docRef = await addDoc(collection(db, 'customers'), {  // Use addDoc and collection functions
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        packageType: formData.packageType,
        branch: formData.branch
      });
      console.log("Document written with ID: ", docRef);
      setFormData({  // Reset the form data
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        country: '',
        packageType: '',
        branch: ''
      });
      alert('Your data has been submitted successfully!');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        placeholder="Last Name"
        required
      />
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        placeholder="Address"
        required
      />
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleInputChange}
        placeholder="City"
        required
      />
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleInputChange}
        placeholder="State"
        required
      />
      <input
        type="text"
        name="country"
        value={formData.country}
        onChange={handleInputChange}
        placeholder="Country"
        required
      />
      <select
        name="packageType"
        value={formData.packageType}
        onChange={handleInputChange}
        required
      >
        <option value="">Select Package Type</option>
        <option value="Masculine">Masculine</option>
        <option value="Feminine">Feminine</option>
        <option value="Others">Others</option>
      </select>
      <select
        name="branch"
        value={formData.branch}
        onChange={handleInputChange}
        required
      >
        <option value="">Select Branch</option>
        <option value="Army">Army</option>
        <option value="Navy">Navy</option>
        <option value="Marine">Marine</option>
        <option value="Airforce">Airforce</option>
        <option value="CoastGuard">Coast Guard</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CustomerForm;
