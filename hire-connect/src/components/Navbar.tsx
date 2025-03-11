import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => (
  <nav className="bg-blue-600 p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white font-bold text-xl">
        <Link href="/">
          <a className="hover:text-gray-200">Recruitment Platform</a>
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link href="/login"><a className="text-white hover:text-gray-200">Login</a></Link>
        <Link href="/register"><a className="text-white hover:text-gray-200">Register</a></Link>
      </div>
    </div>
  </nav>
);

export default Navbar;