import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-white">
              MK<span className="text-primary-400">.</span>
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <p className="text-secondary-300 text-sm mb-2 md:mb-0 md:mr-4">
              &copy; {currentYear} Marcellinus Kristanto. All rights reserved.
            </p>
            <p className="text-secondary-300 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Marcellinus
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;