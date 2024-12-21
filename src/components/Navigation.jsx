import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  TrophyIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  const navItems = [
    { path: '/', icon: HomeIcon, label: 'Home' },
    { path: '/challenges', icon: TrophyIcon, label: 'Challenges' },
    { path: '/garden', icon: SparklesIcon, label: 'Garden' },
    { path: '/profile', icon: UserIcon, label: 'Profile' },
    { path: '/community', icon: ChatBubbleLeftRightIcon, label: 'Community'}
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 px-4 py-2">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          {navItems.map(({ path, icon: Icon, label }) => (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center p-2 ${
                isActive(path) ? 'text-green-600' : 'text-gray-600'
              }`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs mt-1">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;