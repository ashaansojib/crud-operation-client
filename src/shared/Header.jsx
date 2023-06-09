import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link className='btn btn-ghost normal-case text-xl' to="/">Crud Methods</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/server-methods">Server</Link></li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;