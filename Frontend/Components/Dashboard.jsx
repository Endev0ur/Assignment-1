import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'

const Dashboard = () => {
  
  const [data , setData] = useState({
    internName : "",
    referralCode : "",
    totalDonation : "",
    rewards : [],
  })


  useEffect(()=>{
    const getDetails = async () => {
      const url = `${import.meta.env.VITE_BACKEND_URL}`;
      const response = await axios.get(url);

      const result = response.data;
      setData(result);
    }

    getDetails();

  } , [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-2xl p-6">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">INTERN DASHBOARD</h1>

        {/* Intern Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-100 p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-gray-700">Intern Name</h2>
            <p className="text-xl font-bold text-blue-900">{data.internName}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-gray-700">Referral Code</h2>
            <p className="text-xl font-bold text-green-900">{data.referralCode}</p>
          </div>
        </div>

        {/* Total Donations */}
        <div className="bg-yellow-100 p-6 rounded-xl shadow mb-8 text-center">
          <h2 className="text-lg font-semibold text-gray-700">Total Donations Raised</h2>
          <p className="text-3xl font-bold text-yellow-800">{data.totalDonation}</p>
        </div>

        {/* Rewards Section */}
        <div className="bg-purple-100 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-purple-900 mb-4">Rewards / Unlockables</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            {data.rewards.map((reward, idx) => (
              <li key={idx}>{reward}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard