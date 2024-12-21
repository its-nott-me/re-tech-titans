import React from 'react';
import useUserStore from '../store/userStore';

const Header = () => {
  const user = useUserStore((state) => state.user);

  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 w-full z-10">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-600">Carbon Grove</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="text-yellow-500">🌟</span>
            <span className="ml-1">{user.points}</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-500">🌱</span>
            <span className="ml-1">{user.tokens}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;