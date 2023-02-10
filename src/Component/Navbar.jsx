import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link className='navbar nav-brand' to="#">User App</Link>
        <div className="collapse navbar-collapse">
            <ul className='navbar-nav ml-auto' >
                <li className='nav-list'><Link className='nav-link' to="product" >Product</Link></li>
                <li className='nav-list'><Link className='nav-link' to="user" >Users</Link></li>
            </ul>
        </div>
    </nav>

    )
}

export default Navbar;