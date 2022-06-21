import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavLink = ({ href, ...rest }) => {
  const navigate = useNavigate();

  const onClick = (e) => {
    e.preventDefault();
    navigate(href);
  };

  return <a {...rest} onClick={onClick} />;
};

export const Footer = () => (
  <footer>
    <span>App &copy; {new Date().getFullYear()}</span>
    <NavLink href="/" text="Home" />
    <NavLink href="/asdf" text="Stock 404 Page" />
  </footer>
);
