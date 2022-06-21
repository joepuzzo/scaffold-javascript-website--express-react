import React from 'react';
import { Flex } from '@adobe/react-spectrum';
import Contrast from '@spectrum-icons/workflow/Contrast';
import { ActionButton } from '@adobe/react-spectrum';

// Hooks
import useApp from '../../hooks/useApp';

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
        <li class="spectrum-SideNav-item is-selected">
          <a href="#" class="spectrum-SideNav-itemLink" aria-current="page">
            Section Title 1
          </a>
        </li>
        <li class="spectrum-SideNav-item is-disabled">
          <a class="spectrum-SideNav-itemLink">Section Title 2</a>
        </li>
        <li class="spectrum-SideNav-item">
          <a href="#" class="spectrum-SideNav-itemLink">
            Section Title 3
          </a>
        </li>
        <li class="spectrum-SideNav-item">
          <a href="#" class="spectrum-SideNav-itemLink">
            Section Title 4
          </a>
        </li>
      </ul>
    </nav>
  );
};
