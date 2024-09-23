import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomer, removeCustomer } from '../redux/actions/customerActions';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const CustomerManagement = () => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers.customers);
  const [searchTerm, setSearchTerm] = useState('');
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    policyNumber: '',
    planCode: '',
    date: '',
  });
  const [open, setOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddCustomer = () => {
    if (newCustomer.name && newCustomer.email && newCustomer.phone && newCustomer.policyNumber && newCustomer.planCode && newCustomer.date) {
      dispatch(addCustomer(newCustomer));
      setNewCustomer({
        name: '',
        email: '',
        phone: '',
        policyNumber: '',
        planCode: '',
        date: '',
      });
      setOpen(false);
    }
  };

  const handleRemoveCustomer = (email) => {
    dispatch(removeCustomer(email));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-2">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Customer Management</h1>
        <div>
          <button className="bg-purple-500 text-white py-1 px-2 rounded mr-2 hover:bg-purple-700 text-s">
            Upload
          </button>
          <button
            className="bg-purple-500 text-white py-1 px-2 rounded hover:bg-purple-700 text-s"
            onClick={handleClickOpen}
          >
            Add Customer
          </button>
        </div>
      </div>
      <hr className="mb-4 border-t border-gray-300 opacity-70" />
      <div className="mb-2 flex justify-end">
        <input
          type="text"
          placeholder="Search Customer"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-48 p-1 border rounded focus:outline-none focus:ring focus:border-purple-500"
        />
      </div>
      <hr className="mb-2 border-t border-gray-300 opacity-70" />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded text-xs">
          <thead>
            <tr className="w-full bg-gray-100">
              <th className="py-2 px-4 border-b">Customer name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Phone(+91)</th>
              <th className="py-2 px-4 border-b">Policy Number</th>
              <th className="py-2 px-4 border-b">PlanCode</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{customer.name}</td>
                <td className="py-2 px-4 border-b">{customer.email}</td>
                <td className="py-2 px-4 border-b">{customer.phone}</td>
                <td className="py-2 px-4 border-b">{customer.policyNumber}</td>
                <td className="py-2 px-4 border-b">{customer.planCode}</td>
                <td className="py-2 px-4 border-b">{customer.date}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleRemoveCustomer(customer.email)}
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700 text-xs"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Popup open={open} closeOnDocumentClick onClose={handleClose}>
        <div className="modal">
          <a className="close" onClick={handleClose}>
            ×
          </a>
          <h3 className="text-lg">Add New Customer</h3>
          <div className="flex flex-col space-y-2 mt-2">
            <input
              type="text"
              placeholder="Name"
              value={newCustomer.name}
              onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
              className="p-1 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={newCustomer.email}
              onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
              className="p-1 border rounded"
            />
            <input
              type="text"
              placeholder="Phone"
              value={newCustomer.phone}
              onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
              className="p-1 border rounded"
            />
            <input
              type="text"
              placeholder="Policy Number"
              value={newCustomer.policyNumber}
              onChange={(e) => setNewCustomer({ ...newCustomer, policyNumber: e.target.value })}
              className="p-1 border rounded"
            />
            <input
              type="text"
              placeholder="Plan Code"
              value={newCustomer.planCode}
              onChange={(e) => setNewCustomer({ ...newCustomer, planCode: e.target.value })}
              className="p-1 border rounded"
            />
            <input
              type="text"
              placeholder="Date"
              value={newCustomer.date}
              onChange={(e) => setNewCustomer({ ...newCustomer, date: e.target.value })}
              className="p-1 border rounded"
            />
          </div>
          <div className="mt-4">
            <button onClick={handleAddCustomer} className="bg-purple-500 text-white py-1 px-2 rounded hover:bg-purple-700 text-s">
              Save
            </button>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default CustomerManagement;
