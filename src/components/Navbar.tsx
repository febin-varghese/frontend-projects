import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: FC<NavbarProps> = ({ links, className }) => {
  return (
    <nav className={className}>
      {links.map((link) => {
        return (
          <NavLink key={link.pageId} to={link.path}>
            {link.name}
          </NavLink>
        );
      })}
    </nav>
  );
};
export default Navbar;

export interface NavbarProps {
  links: NavbarLink[];
  className?: string;
}

export interface NavbarLink {
  pageId: string;
  path: string;
  name: string;
}
