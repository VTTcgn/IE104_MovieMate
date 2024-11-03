import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <div className="text-xl font-bold text-white">WATCHER</div>
        <div className="text-white">
          <a href="#" className="mx-4 hover:text-yellow-400">Phim</a>
          <a href="#" className="mx-4 hover:text-yellow-400">Khuyến mãi</a>
          <a href="#" className="mx-4 hover:text-yellow-400">Góc điện ảnh</a>
        </div>
      </div>

      {/* Search bar */}
      <div className="flex items-center space-x-2">
        <input 
          type="text" 
          placeholder="Tìm phim" 
          className="p-2 rounded-full bg-white-800 text-gray-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
        <button className="text-white hover:text-yellow-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.986 3.553l4.771 4.772a1 1 0 01-1.414 1.414l-4.772-4.771A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Login button */}
      <div>
        <button className="text-white flex items-center space-x-1 hover:text-yellow-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 10a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
          </svg>
          <span>Log in</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
