import React, { useRef } from 'react';
import { Flex } from '@adobe/react-spectrum';
import Contrast from '@spectrum-icons/workflow/Contrast';
import { ActionButton } from '@adobe/react-spectrum';

// Hooks
import useApp from '../../hooks/useApp';

import { useLocation, useNavigate } from 'react-router-dom';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';

const NavLink = ({ children, href, ...rest }) => {
  const navigate = useNavigate();

  const onClick = (e) => {
    e.preventDefault();
    navigate(href);
  };

  let location = useLocation();
  const isSelected = href === location.pathname;

  return (
    <li className={`spectrum-SideNav-item ${isSelected ? 'is-selected' : ''}`}>
      <a {...rest} onClick={onClick} className="spectrum-SideNav-itemLink">
        {children}
      </a>
    </li>
  );
};

export const Nav = () => {
  const { toggleColorScheme, navOpen, closeNav } = useApp();

  const navRef = useRef();
  const triggerElem = useRef();

  useOutsideAlerter(() => closeNav(), navRef);

  return (
    <nav className={navOpen ? 'sidenav sidenav-visible' : 'sidenav'} ref={navRef}>
      <Flex direction="row" justifyContent="space-between" alignItems="center" gap="size-100">
        <h1>My App</h1>
        <ActionButton aria-label="Switch Theme" onClick={() => toggleColorScheme()}>
          <Contrast.default />
        </ActionButton>
      </Flex>
      <ul className="spectrum-SideNav">
        <NavLink href="/home">Home</NavLink>
        <NavLink href="/Admin">Admin</NavLink>
        <NavLink href="/unauthorized">Unauthorized</NavLink>
        <NavLink href="/asdf">404</NavLink>
      </ul>
    </nav>
  );
};
