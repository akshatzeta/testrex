import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faBoxes, faBox, faHandHoldingMedical, faNotesMedical, faCalendarCheck, faCaretDown, faCaretUp, faClock } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({
    partner: false,
    sku: false,
    provider: false,
  });

  const location = useLocation();

  const toggleSection = (section) => {
    
    setOpenSections(prevOpenSections => ({
      ...prevOpenSections,
      [section]: !prevOpenSections[section]
    }));
  };

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className="hidden md:flex flex-col w-1/5 h-screen bg-gray-100">
      <div className="flex flex-col items-center p-4">
        <Logo className="w-24 h-12 transition-colors duration-300 hover:fill-purple-500" />
        <p className="my-4 font-bold capitalize">My account</p>
        <ul className="w-full">
          <li className={`cursor-pointer ${openSections.partner ? 'bg-gray-200' : ''}`}>
            <div className="flex justify-between items-center p-2 rounded group hover:bg-purple-200" onClick={() => toggleSection('partner')}>
              <span className="group-hover:text-purple-500 capitalize">Partner</span>
              <FontAwesomeIcon icon={openSections.partner ? faCaretUp : faCaretDown} className="group-hover:text-purple-500" />
            </div>
            {openSections.partner && (
              <ul className="pl-4">
                <li className="p-2 flex items-center cursor-pointer rounded group hover:bg-purple-200">
                  <FontAwesomeIcon icon={faBox} className="mr-2 group-hover:text-purple-500" />
                  <NavLink to="/submenu1" className={`flex ${isActive('/submenu1') ? 'active' : 'group-hover:text-purple-500 capitalize'}`}>Submenu 1</NavLink>
                </li>
                <li className="p-2 flex items-center cursor-pointer rounded group hover:bg-purple-200">
                  <FontAwesomeIcon icon={faBox} className="mr-2 group-hover:text-purple-500" />
                  <NavLink to="/submenu2" className={`flex ${isActive('/submenu2') ? 'active' : 'group-hover:text-purple-500 capitalize'}`}>Submenu 2</NavLink>
                </li>
                <li className="p-2 flex items-center cursor-pointer rounded group hover:bg-purple-200">
                  <FontAwesomeIcon icon={faBox} className="mr-2 group-hover:text-purple-500" />
                  <NavLink to="/submenu3" className={`flex ${isActive('/submenu3') ? 'active' : 'group-hover:text-purple-500 capitalize'}`}>Submenu 3</NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="cursor-pointer p-2 flex items-center rounded group hover:bg-purple-200">
            <NavLink to="/PlanManagement" className={`flex ${isActive('/PlanManagement') ? 'active' : 'group-hover:text-purple-500 capitalize'}`}>
              <FontAwesomeIcon icon={faClipboardList} className="mr-2" />
              Plan Management
            </NavLink>
          </li>
          <li className="cursor-pointer p-2 flex items-center rounded group hover:bg-purple-200">
            <NavLink to="/BenefitManagement" className={`flex ${isActive('/BenefitManagement') ? 'active' : 'group-hover:text-purple-500 capitalize'}`}>
              <FontAwesomeIcon icon={faClipboardList} className="mr-2" />
              Benefit Management
            </NavLink>
          </li>
          <li className="cursor-pointer p-2 flex items-center rounded group hover:bg-purple-200">
            <NavLink to="/CustomerManagement" className={`flex ${isActive('/CustomerManagement') ? 'active' : 'group-hover:text-purple-500 capitalize'}`}>
              <FontAwesomeIcon icon={faCalendarCheck} className="mr-2" />
              Customer Management
            </NavLink>
          </li>

          <li className={`cursor-pointer ${openSections.sku ? 'bg-gray-200' : ''}`}>
  <div className="flex justify-between items-center p-2 rounded group hover:bg-purple-200" onClick={() => toggleSection('sku')}>
    <FontAwesomeIcon icon={faBoxes} className="mr-2 group-hover:text-purple-500" />
    <span className="group-hover:text-purple-500 capitalize flex-grow">SKU Management</span>
    <div className="flex justify-end">
      <FontAwesomeIcon icon={openSections.sku ? faCaretUp : faCaretDown} className="group-hover:text-purple-500" />
    </div>
  </div>
  {openSections.sku && (
    <ul className="pl-6">
      <li className="p-2 flex items-center cursor-pointer rounded group hover:bg-purple-200">
        <FontAwesomeIcon icon={faBox} className="mr-2 group-hover:text-purple-500" />
        <NavLink to="/sku-management/submenu1" className={`flex ${isActive('/sku-management/submenu1') ? 'active' : 'group-hover:text-purple-500 capitalize'}`}>Submenu 1</NavLink>
      </li>
      <li className="p-2 flex items-center cursor-pointer rounded group hover:bg-purple-200">
        <FontAwesomeIcon icon={faBox} className="mr-2 group-hover:text-purple-500" />
        <NavLink to="/sku-management/submenu2" className={`flex ${isActive('/sku-management/submenu2') ? 'active' : 'group-hover:text-purple-500 capitalize'}`}>Submenu 2</NavLink>
      </li>
      <li className="p-2 flex items-center cursor-pointer rounded group hover:bg-purple-200">
        <FontAwesomeIcon icon={faBox} className="mr-2 group-hover:text-purple-500" />
        <NavLink to="/sku-management/submenu3" className={`flex ${isActive('/sku-management/submenu3') ? 'active' : 'group-hover:text-purple-500 capitalize'}`}>Submenu 3</NavLink>
      </li>
    </ul>
  )}
</li>
<li className={`cursor-pointer ${openSections.provider ? 'bg-gray-200' : ''}`}>
  <div className="flex justify-between items-center p-2 rounded group hover:bg-purple-200" onClick={() => toggleSection('provider')}>
    <FontAwesomeIcon icon={faHandHoldingMedical} className="mr-2 group-hover:text-purple-500" />
    <span className="group-hover:text-purple-500 capitalize flex-grow">Provider Management</span>
    <div className="flex justify-end">
      <FontAwesomeIcon icon={openSections.provider ? faCaretUp : faCaretDown} className="group-hover:text-purple-500" />
    </div>
  </div>
  {openSections.provider && (
    <ul className="pl-6">
      <li className="p-2 flex items-center cursor-pointer rounded group hover:bg-purple-200">
        <FontAwesomeIcon icon={faNotesMedical} className="mr-2 group-hover:text-purple-500" />
        <NavLink to="/provider-management/submenu1" className={`flex ${isActive('/provider-management/submenu1') ? 'active' : 'group-hover:text-purple-500 capitalize'}`}>Submenu 1</NavLink>
      </li>
      <li className="p-2 flex items-center cursor-pointer rounded group hover:bg-purple-200">
        <FontAwesomeIcon icon={faNotesMedical} className="mr-2 group-hover:text-purple-500" />
        <NavLink to="/provider-management/submenu2" className={`flex ${isActive('/provider-management/submenu2') ? 'active' : 'group-hover:text-purple-500 capitalize'}`}>Submenu 2</NavLink>
      </li>
      <li className="p-2 flex items-center cursor-pointer rounded group hover:bg-purple-200">
        <FontAwesomeIcon icon={faNotesMedical} className="mr-2 group-hover:text-purple-500" />
        <NavLink to="/provider-management/submenu3" className={`flex ${isActive('/provider-management/submenu3') ? 'active' : 'group-hover:text-purple-500 capitalize'}`}>Submenu 3</NavLink>
      </li>
    </ul>
  )}
</li>

          <li className="cursor-pointer p-2 flex items-center rounded group hover:bg-purple-200">
            <NavLink to="/booking-management" className={`flex ${isActive('/booking-management') ? 'active' : 'group-hover:text-purple-500 capitalize'}`}>
              <FontAwesomeIcon icon={faCalendarCheck} className="mr-2" />
              Booking Management
            </NavLink>
          </li>
        
        <li className="cursor-pointer p-2 flex items-center rounded group hover:bg-purple-200">
            <NavLink to="/timeslot" className={`flex ${isActive('/timeslot') ? 'active' : 'group-hover:text-purple-500 capitalize'}`}>
              <FontAwesomeIcon icon={faClock} className="mr-2" />
              Time Slot
            </NavLink>
          </li>
          </ul>
              



      </div>
  

    </div>
  );
};

export default Sidebar;
