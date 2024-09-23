import React from 'react';
import { ReactComponent as Logo } from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 flex items-center justify-between px-4">
      <div className="flex-1"><Logo width={100} height={45} /></div>
      
      <div className="flex-1 flex justify-end">
        <FontAwesomeIcon icon={faRightFromBracket} className="text-white" />
      </div>
    </nav>
  );
}

export default Navbar;
