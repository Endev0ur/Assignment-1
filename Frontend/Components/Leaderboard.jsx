import React from 'react';
import { Link } from 'react-router-dom';

const Leaderboard = () => {
  const leaders = [
    { name: 'Shubham Rawat', funds: 12500 },
    { name: 'Aarav Singh', funds: 11200 },
    { name: 'Priya Sharma', funds: 9800 },
    { name: 'Rohan Das', funds: 7500 },
    { name: 'Kavya Mehra', funds: 5200 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">🏆 Leaderboard</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-left border border-gray-200">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                <th className="px-4 py-2">Rank</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Raised Funds (₹)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {leaders.map((user, index) => (
                <tr
                  key={index}
                  className={`${
                    index === 0 ? 'bg-yellow-100 font-bold' : index === 1 ? 'bg-gray-100' : ''
                  } border-t`}
                >
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{user.name}</td>
                  <td className="px-4 py-3">₹{user.funds.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Link to="/dashboard" className='max-w-[430px] w-[95%] text-center bg-gradient-to-r from-blue-500 via-white to-sky-500 rounded-lg border-4 border-white mt-5 pt-3 pb-3 font-bold text-xl cursor-pointer'>Go to Dashboard</Link>
    </div>
  );
};

export default Leaderboard;
