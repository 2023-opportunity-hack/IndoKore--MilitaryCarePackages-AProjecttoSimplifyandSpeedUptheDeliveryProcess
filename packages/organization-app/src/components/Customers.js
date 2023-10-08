// Customers.js

import { useState } from 'react';
import Navbar from './Navbar';
import './styles/Customers.css';
import EmailButton from './EmailButton';  // Adjust the path if necessary

function Customers() {
    const customersData = [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          address: '123 Main St',
          city: 'Anytown', 
          state: 'CA',
          country: 'USA',
          packageType: 'Masculine',
          militaryBranch: 'Army'
        },
        {
          id: 2,
          firstName: 'Jane',
          lastName: 'Doe',
          address: '456 Park Ln',
          city: 'Anytown',
          state: 'CA',
          country: 'USA', 
          packageType: 'Feminine',
          militaryBranch: 'Navy'
        },
        {
          id: 3,
          firstName: 'Jack',
          lastName: 'Hill',
          address: '789 Oak Rd',
          city: 'Boxton',
          state: 'MA',
          country: 'USA',
          packageType: 'Other',
          militaryBranch: 'Marines'
        },
        {
          id: 4,
          firstName: 'Jill',
          lastName: 'Hill',
          address: '246 Elm St',
          city: 'Boxton',
          state: 'MA',
          country: 'USA',
          packageType: 'Girl Scout Cookies',
          militaryBranch: 'Air Force'
        },
        {
          id: 5,
          firstName: 'Joe',
          lastName: 'Shmoe',
          address: '135 Park Ave',
          city: 'New York',
          state: 'NY',
          country: 'USA',
          packageType: 'Masculine',
          militaryBranch: 'Army'
        },
        {
          id: 6,
          firstName: 'Jess',
          lastName: 'Shmoe',
          address: '246 Park Ave', 
          city: 'New York',
          state: 'NY',
          country: 'USA',
          packageType: 'Feminine',
          militaryBranch: 'Coast Guard'
        },
        {
          id: 7,
          firstName: 'Jackie',
          lastName: 'Robinson',
          address: '311 E Chestnut St',
          city: 'Los Angeles',
          state: 'CA',
          country: 'USA',
          packageType: 'Other',
          militaryBranch: 'Army'
        },
        {
          id: 8, 
          firstName: 'Veronica',
          lastName: 'Lake',
          address: '398 Bear Paw Rd',
          city: 'Pasadena',
          state: 'CA',
          country: 'USA',
          packageType: 'Feminine',
          militaryBranch: 'Marines' 
        },
        {
          id: 9,
          firstName: 'Clark',
          lastName: 'Gable',
          address: '478 Sunset Blvd',
          city: 'Hollywood',
          state: 'CA',
          country: 'USA',
          packageType: 'Masculine',
          militaryBranch: 'Air Force'
        },
        {  
          id: 10,
          firstName: 'Bette',
          lastName: 'Davis',
          address: '189 Vine St',
          city: 'Hollywood',
          state: 'CA', 
          country: 'USA',
          packageType: 'Feminine',
          militaryBranch: 'Coast Guard'
        },
        {
          id: 11,
          firstName: 'Bob',
          lastName: 'Smith',
          address: '456 Park Ln',
          city: 'Gotham',
          state: 'NY',
          country: 'USA',
          packageType: 'Feminine',
          militaryBranch: 'Army'
        },
        {
          id: 12,
          firstName: 'Alice', 
          lastName: 'Wong',
          address: '789 Main St',
          city: 'Centreville',
          state: 'VA',
          country: 'USA',
          packageType: 'Masculine',
          militaryBranch: 'Navy'
        },
        {
          id: 13,
          firstName: 'Frank',
          lastName: 'Lee',
          address: '234 Oak Rd',
          city: 'Lakeside',
          state: 'MI',
          country: 'USA',
          packageType: 'Other',
          militaryBranch: 'Marines'
        },
        {  
          id: 14,
          firstName: 'Grace',
          lastName: 'Choi',
          address: '345 Cedar Ln', 
          city: 'Brookside',
          state: 'NJ',
          country: 'USA',
          packageType: 'Feminine',
          militaryBranch: 'Air Force'
        },
        {
          id: 15,
          firstName: 'Mark',
          lastName: 'Johnson',
          address: '456 Pine St',
          city: 'Woodbury',
          state: 'MN',
          country: 'USA',
          packageType: 'Masculine', 
          militaryBranch: 'Marines'
        }
      ];
  const [customers, setCustomers] = useState(customersData); 

  return (
    <div>
      <Navbar />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Military Branch</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>Country</th>
        <th>Package Type</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.militaryBranch}</td>
                <td>{customer.address}</td>
          <td>{customer.city}</td>
          <td>{customer.state}</td>
          <td>{customer.country}</td>
          <td>{customer.packageType}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <EmailButton />

      <button 
        className="edit-btn"
        onClick={() => {/* show edit modal */}}
      >
        Edit
      </button>

    </div>
  );
}

export default Customers;