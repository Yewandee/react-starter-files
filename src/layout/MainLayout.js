import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTitle from '../services/hooks/useTitle';

const MainLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { appTitle } = useTitle();

  const handleSidebar = () => {
    setOpenSidebar(false);
  };

  return (
    <div className="w-full h-svh max-h-svh bg-gray-100 relative">
      {openSidebar && (
        <div className='fixed top-0 left-0 w-48 z-20 block md:hidden'>
          <Sidebar handleSidebar={handleSidebar}/>
          <button
            className="absolute top-9 right-0 text-white"
            onClick={handleSidebar}
          >
            <div className='flex items-center justify-center border-2 border-white p-2 h-[25px] w-[25px] rounded-full'>
              <FontAwesomeIcon icon={faXmark} style={{fontSize: '18px'}} />
            </div>
          </button>
        </div>
      )}
      <div className='fixed top-0 left-0 w-48 lg:w-64 z-20 hidden md:block'>
        <Sidebar/>
      </div>
      <div className="h-full relative overflow-hidden md:ml-48 lg:ml-64 bg-[#f7f7f7]">
        <div className='bg-white z-10 p-4 border-b border-gray-300 h-16 fixed top-0 right-0 left-0'>
          <Header title={appTitle} setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
        </div>
        <main className="pt-20 pb-5 h-full overflow-hidden">
          <div className='px-5 bg-white h-full overflow-y-scroll'>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;