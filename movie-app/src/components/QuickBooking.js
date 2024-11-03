import React from 'react';

const QuickBooking = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md flex justify-between items-center space-x-4">
      {/* Title */}
      <h2 className="font-bold text-lg text-black">ĐẶT VÉ NHANH</h2>

      {/* Select options */}
      <div className="flex space-x-5">
        <select className="bg-gray-100 p-2 rounded-md text-blue-600 font-semibold border border-gray-300">
          <option>1. Chọn Rạp</option>
          {/* Thêm các tùy chọn rạp chiếu */}
        </select>
        <select className="bg-gray-100 p-2 rounded-md text-blue-600 font-semibold border border-gray-300">
          <option>2. Chọn Phim</option>
          {/* Thêm các tùy chọn phim */}
        </select>
        <select className="bg-gray-100 p-2 rounded-md text-blue-600 font-semibold border border-gray-300">
          <option>3. Chọn Ngày</option>
          {/* Thêm các tùy chọn ngày */}
        </select>
        <select className="bg-gray-100 p-2 rounded-md text-blue-600 font-semibold border border-gray-300">
          <option>4. Chọn Suất</option>
          {/* Thêm các tùy chọn suất chiếu */}
        </select>
      </div>

      {/* Button */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">ĐẶT NGAY</button>
    </div>
  );
};

export default QuickBooking;
