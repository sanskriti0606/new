import React from 'react';
import Link from 'next/link';
import Search from './Search';

const Header: React.FC = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <Link href="/">
          <img
            src="/logo1.png"
            alt="Spotify"
            className="w-24 h-auto"
          />
        </Link>
        <div className="flex-1 mx-3 flex justify-center">
          <Search />
        </div>
        <div className="flex space-x-4 items-center flex-wrap mt-4 md:mt-0">
          <Link href="/premium" className="text-gray-300 text-sm hover:text-white transition-colors duration-300">
            Premium
          </Link>
          <Link href="/support" className="text-gray-300 text-sm hover:text-white transition-colors duration-300">
            Support
          </Link>
          <Link href="/download" className="text-gray-300 text-sm hover:text-white transition-colors duration-300">
            Download
          </Link>
          <div className="border-l border-gray-600 h-6 mx-4"></div>
          <Link href="/signup" className="text-gray-300 text-sm hover:text-white transition-colors duration-300">
            Sign Up
          </Link>
          <Link href="/login" className="bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300">
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
