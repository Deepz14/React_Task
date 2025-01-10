import React, { useState } from 'react';
import Counter from '../components/Counter';
import Dropdown from '../components/Dropdown';
import withHeader from '../components/HeaderHOC';

const Dashboard = () => {
  const [counter, setCounter] = useState(0);

  const handleDropdownChange = (action) => {
    if (action === 'plus') {
      setCounter((prev) => prev + 1);
    } else if (action === 'minus') {
      setCounter((prev) => prev - 1);
    } else if (action === 'reset') {
      setCounter(0);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md flex flex-col sm:flex-row w-full max-w-2xl">
        {/* Left Side: Counter */}
        <div className="flex-1 flex items-center justify-center border-r sm:border-r-0 sm:border-b border-gray-300 p-4">
          <Counter value={counter} />
        </div>

        {/* Right Side: Dropdown */}
        <div className="flex-1 flex items-center justify-center p-4">
          <Dropdown onChange={handleDropdownChange} />
        </div>
      </div>
    </div>
  );
};

const DashboardWithHeader = withHeader(Dashboard);
export default DashboardWithHeader;
