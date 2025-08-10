import { FaChevronDown } from 'react-icons/fa';
import indi from '../assets/images/IndiGo.avif';

const Navbar = () => {
    return (
        <>

            <nav className="  sticky top-0 ">
                {/* Full-width background with centered content */}
                <div className=" bg-[#F0F9FF]   flex justify-between md:justify-around items-center px-6 py-3 mt-2">

                    {/* Logo */}
                    <img src={indi} alt="Indigo Logo" className="h-6 md:h-8 bg-[#F0F9FF] " />

                    {/* Center Menu */}
                    <div className="hidden md:flex items-center gap-10  text-sm bg-[#F0F9FF]  font-medium text-gray-800">
                        <a href="#" className="flex items-center gap-1">
                            Book <FaChevronDown className="h-4 w-4 text-gray-600  " />
                        </a>
                        <a href="#" className="flex items-center gap-1  ">
                            Trips <FaChevronDown className="h-4 w-4 text-gray-600  " />
                        </a>
                        <a href="#" className=' '>Deals and Offers</a>
                        <a href="#" className=' '>Check-in</a>
                        <a href="#" className="flex items-center gap-1 ">
                            IndiGo BluChip <FaChevronDown className="h-4 w-4 text-gray-600 " />
                        </a>
                    </div>

                    {/* Right Section */}
                    <div className="flex   items-center gap-6">
                        <a href="#" className="underline text-sm  ">Tariff Sheet</a>

                        {/* Login Button */}
                        <button className="flex items-center gap-1 bg-gray-300 rounded-full px-4 py-2 text-sm ">
                            Login <FaChevronDown className="h-4 w-4 text-gray-600 " />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
