import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar, { NavbarLink } from '../components/Navbar';

const SharedPage = () => {
  return (
    <>
      <Navbar links={links}></Navbar>
      <Outlet />
    </>
  );
};
export default SharedPage;

const links: NavbarLink[] = [
  { pageId: 'home', path: '/', name: 'Home' },
  { pageId: 'about', path: '/about', name: 'About' },
];
