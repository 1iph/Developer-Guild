
import { Shield } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield size={24} />
          <span className="font-bold text-lg">[DEV]</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-gray-300 transition-colors">Home</a>
          <a href="#roles" className="hover:text-gray-300 transition-colors">Roles</a>
          <a href="#staff" className="hover:text-gray-300 transition-colors">Staff</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
