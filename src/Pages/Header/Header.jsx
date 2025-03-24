import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { useLocation } from 'react-router-dom';

import './Header.scss';

function Header() {
  let location = useLocation();
  return (
    <Navbar className='header'>
      <NavbarBrand className='navbar-brand' href='/'>
        {location.pathname === '/' ? 'Debounce Example' : 'Throttling Example'}
      </NavbarBrand>
      <Nav className='d-flex flex-row me-auto'>
        <NavItem className='mx-2 nav-item'>
          <NavLink href='/'>Debouncing</NavLink>
        </NavItem>
        <NavItem className='mx-2 nav-item'>
          <NavLink href='/throttling'>Throttling</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Header;
