import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { faGear, faChartLine, faHandshake, faArrowRightFromBracket, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import logo from "../../src/assets/logo.jpg"

const Sidebar = ({handleSidebar, updateTitle}) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleChange = (val) => {
        updateTitle(val);
        handleSidebar();
    }

    return (
        <div className="relative h-[100vh] flex flex-col bg-priColor text-white py-4 text-[12px] sm:text-[14px] lg:text-[16px]">
        <div className='bg-priColor w-[85%] md:w-full h-14'>
            <img src='' alt="CodeByte Logo" className="w-full h-full object-cover" />
        </div>
        <nav className="flex-1 my-2 overflow-y-auto">
            <Link to="/" onClick={() => handleChange('Dashboard')} className="block py-2 pr-4 pl-6 hover:bg-blue-700">
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faChartLine} size='xs' />
                Sidebar
            </div>
            </Link>
            <div>
                <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="block w-full text-left py-2 pr-4 pl-6 hover:bg-blue-700 flex justify-between">
                    <div className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faHandshake} size='xs' />
                    Dropdown
                    </div>
                    {isDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {isDropdownOpen && (
                    <div className="ml-4">
                        <Link to="/settlement/all" onClick={() => handleChange('All Dropdown')} className="block py-2 px-4 text-[12px] lg:text-[14px] hover:bg-blue-700">Dropdown</Link>
                        <Link to="/settlement/bank-account" onClick={() => handleChange('Dropdown 1')} className="block py-2 px-4 text-[12px] lg:text-[14px] hover:bg-blue-700">Dropdown 1</Link>
                    </div>
                )}
            </div>
        </nav>
        <nav className="flex-shrink-0">
            <Link to="/settings" onClick={() => handleChange('Settings')} className="block py-2 pr-4 pl-6 hover:bg-blue-700">
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faGear} size='xs' />
                Settings
            </div>
            </Link>
            <Link to="/settings" onClick={() => handleChange('Help Center')} className="block py-2 pr-4 pl-6 hover:bg-blue-700">
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faHeadphones} size='xs' />
                Help Center
            </div>
            </Link>
            <Link to="/login" className="block py-2 pr-4 pl-6 hover:bg-blue-700">
            <div className='flex items-center gap-2'>
                <FontAwesomeIcon icon={faArrowRightFromBracket} size='xs' />
                Logout
            </div>
            </Link>
        </nav>
        </div>
    );
};

export default Sidebar;