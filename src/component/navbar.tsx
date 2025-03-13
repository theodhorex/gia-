import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg py-4 px-6 flex items-center z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl">
          <b className="montserrat text-yellow-500 font-bold">Gia</b> Kalibanteng
        </h1>

        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <div className="w-6 h-1 bg-yellow-500 mb-2"></div>
          <div className="w-6 h-1 bg-yellow-500 mb-2"></div>
          <div className="w-6 h-1 bg-yellow-500"></div>
        </div>

        <ul
          className={`lg:flex lg:space-x-10 font-semibold text-yellow-500 ${
            isMenuOpen
              ? 'flex flex-col items-center bg-white absolute top-16 left-0 right-0 py-6 space-y-6 transition-all duration-300 ease-in-out opacity-100 transform translate-y-0 text-center shadow-lg'
              : 'hidden lg:flex'
          }`}
        >
          <li className="hover:text-orange-500 transition duration-300 cursor-pointer">Misi</li>
          <li className="hover:text-orange-500 transition duration-300 cursor-pointer">Pelayanan</li>
          <li className="hover:text-orange-500 transition duration-300 cursor-pointer">Berita</li>
          <li className="hover:text-orange-500 transition duration-300 cursor-pointer">Cerita</li>
          <li className="hover:text-orange-500 transition duration-300 cursor-pointer">Menabur</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
