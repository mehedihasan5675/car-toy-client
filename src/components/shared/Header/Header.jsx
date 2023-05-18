import React from 'react';
import Menubar from './Menubar/Menubar';
import Topbar from './Topbar/Topbar';

const Header = () => {
    return (
        <div>
            <Topbar></Topbar>
            <Menubar></Menubar>

        </div>
    );
};

export default Header;