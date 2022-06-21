import React from 'react';
import { Flex } from '@adobe/react-spectrum';
import Contrast from '@spectrum-icons/workflow/Contrast';
import { ActionButton } from '@adobe/react-spectrum';

// Hooks
import useApp from '../../hooks/useApp';

import { useNavigate } from 'react-router-dom';

const NavLink = ({ children, href, ...rest }) => {
  const navigate = useNavigate();

  const onClick = (e) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <li class="spectrum-SideNav-item is-selected">
      <a {...rest} onClick={onClick} class="spectrum-SideNav-itemLink">
        {children}
      </a>
    </li>
  );
};

export const Nav = () => {
  const { toggleColorScheme } = useApp();

  return (
    <nav className="sidenav">
      <Flex direction="row" justifyContent="space-between" alignItems="center" gap="size-100">
        <h1>My App</h1>
        <ActionButton aria-label="Switch Theme" onClick={() => toggleColorScheme()}>
          <Contrast.default />
        </ActionButton>
      </Flex>
      <ul class="spectrum-SideNav">
        <NavLink href="/home">Home</NavLink>
        <NavLink href="/Admin">Admin</NavLink>
        <NavLink href="/unauthorized">Unauthorized</NavLink>
        <NavLink href="/asdf">404</NavLink>
      </ul>
    </nav>
  );
};
