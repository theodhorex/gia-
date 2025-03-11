const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 w-full bg-white shadow-lg py-4 px-6 flex items-center z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl">
            <b className="montserrat text-yellow-500 font-bold">Gia</b> Kalibanteng
          </h1>
  
          <ul className="flex space-x-10 font-semibold text-yellow-500">
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
  