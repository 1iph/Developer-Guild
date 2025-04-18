
import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center mb-4">
          <Shield size={32} className="mr-2" />
          <span className="font-bold text-xl">[DEV]</span>
        </div>
        <p className="text-gray-400 mb-4">
          © {new Date().getFullYear()} The Hypixel Developers. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#home" className="hover:text-gray-300 transition-colors">Home</a>
          <a href="#roles" className="hover:text-gray-300 transition-colors">Roles</a>
          <a href="#staff" className="hover:text-gray-300 transition-colors">Staff</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
