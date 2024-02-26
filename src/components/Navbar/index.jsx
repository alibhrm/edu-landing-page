import { useState } from "react";
import { logo, lock, hamburgerMenu, close } from "../../assets";
const Navbar = () => {
  const [toggle, setToggle] = useState();
  const handleClick = () => setToggle(!toggle);
  return (
    <div className="w-full  h-[80px] bg-white border-b">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <img src={logo} alt="" />
        <nav>
          <ul className="hidden md:flex gap-4 justify-center items-center">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </nav>
        <div className="hidden md:flex">
          <button className="flex justify-between items-center  bg-transparent  px-6 gap-2">
            <img src={lock} alt="" />
            login
          </button>
          <button className="hidden md:flex bg-[#3CBD95] rounded-md px-3 py-3 text-white">
            sign up for free
          </button>
        </div>

        <div
          className={`md:hidden transition ease-in-out duration-300 transform ${
            toggle ? "block origin-center rotate-90" : " origin-center rotate-0"
          }`}
          onClick={handleClick}
        >
          <img src={toggle ? close : hamburgerMenu} />
        </div>
      </div>
      <div
        className={
          toggle
            ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden border-b"
            : " hidden"
        }
      >
        <ul className="text-center">
          <li className="p-4 hover:bg-gray-100">Home</li>
          <li className="p-4 hover:bg-gray-100">About</li>
          <li className="p-4 hover:bg-gray-100">Support</li>
          <li className="p-4 hover:bg-gray-100">Platform</li>
          <li className="p-4 hover:bg-gray-100">Pricing</li>
        </ul>
        <div className="flex flex-col my-4 gap-4">
          <button className="border border-[20B486] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4">
            <img src={lock} alt="" />
            login
          </button>
          <button className=" bg-[#3CBD95] rounded-md px-3 py-3 text-white">
            sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
