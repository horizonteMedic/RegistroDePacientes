import React from 'react';
import Navbar from '../../Components/Navbar'; 

const PanelPrincipal = ({ isLoggedIn }) => {
  const items = Array.from({ length: 25 }, (_, index) => index + 1);

  return (
    <div>
      {isLoggedIn && <Navbar />} 
      <div className="flex flex-col p-4 sm:p-12">
        <div className="flex flex-wrap justify-center gap-4 p-2 sm:p-4">
          {items.slice(0, 5).map((item) => (
            <div key={item} className="bg-white p-4 shadow-md rounded-md text-center cursor-pointer w-24 sm:w-auto">
              Item
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 p-2 sm:p-4">
          {items.slice(5, 10).map((item) => (
            <div key={item} className="bg-white p-4 shadow-md rounded-md text-center cursor-pointer w-24 sm:w-auto">
              Item
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 p-2 sm:p-4">
          {items.slice(10, 15).map((item) => (
            <div key={item} className="bg-white p-4 shadow-md rounded-md text-center cursor-pointer w-24 sm:w-auto">
              Item
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 p-2 sm:p-4">
          {items.slice(15, 20).map((item) => (
            <div key={item} className="bg-white p-4 shadow-md rounded-md text-center cursor-pointer w-24 sm:w-auto">
              Item
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 p-2 sm:p-4">
          {items.slice(20, 25).map((item) => (
            <div key={item} className="bg-white p-4 shadow-md rounded-md text-center cursor-pointer w-24 sm:w-auto">
              Item
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PanelPrincipal;
