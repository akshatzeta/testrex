import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBenefits, searchBenefit } from '../redux/actions/benefitActions';

const BenefitManagement = () => {
  const dispatch = useDispatch();
  const benefits = useSelector((state) => state.benefits.benefits);
  const searchTerm = useSelector((state) => state.benefits.searchTerm);

  useEffect(() => {
    dispatch(setBenefits([
      { title: 'Employee Health Benefit', sku: '708 SKU available', status: 'Published', buttonText: 'View Benefits' },
      { title: 'Employee Benefit', sku: '707 SKU available', status: 'Published', buttonText: 'View Benefits' },
      { title: 'New Joinee Health Screening', sku: '1 SKU available', status: 'Draft', buttonText: 'Edit Benefits' },
    ]));
  }, [dispatch]);

  const handleSearchChange = (e) => {
    dispatch(searchBenefit(e.target.value));
  };

  const filteredBenefits = benefits.filter((benefit) =>
    benefit.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-2">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Benefit Management</h1>
        <button className="bg-purple-500 text-white py-1.5 px-3 rounded hover:bg-purple-700">New Benefits</button>
      </div>
      <hr className="mb-4 border-t border-gray-300 opacity-70" />
      <div className="mb-4 flex justify-end">
        <input
          type="text"
          placeholder="Search Benefits"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-48 p-1 border rounded focus:outline-none focus:ring focus:border-purple-500"
        />
      </div>
      <hr className="mb-4 border-t border-gray-300 opacity-70" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {filteredBenefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-5 border border-gray-200 hover:shadow-xl transition duration-300 ease-in-out"
          >
            <h2 className="text-lg font-semibold mb-2.5">{benefit.title}</h2>
            <p className="text-gray-600 mb-3">{benefit.sku}</p>
            <div className="flex justify-between items-center">
              <button className="bg-purple-500 text-white py-1.5 px-3 rounded hover:bg-purple-700 focus:outline-none">
                {benefit.buttonText}
              </button>
              <span
                className={`py-0.5 px-2.5 rounded text-white ${
                  benefit.status === 'Published' ? 'bg-green-500' : 'bg-gray-500'
                }`}
              >
                {benefit.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitManagement;
