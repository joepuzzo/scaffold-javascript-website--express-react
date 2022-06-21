import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useMedia from '../../hooks/useMedia';

const NavLink = ({ href, ...rest }) => {
  const navigate = useNavigate();

  const onClick = (e) => {
    e.preventDefault();
    navigate(href);
  };

  return <a {...rest} onClick={onClick} />;
};

export const Header = () => {
  // header contents modal open state when resize
  const [modalOpen, setModalOpen] = useState(false);
  const { isDesktopUp } = useMedia();

  // For resizing header
  window.addEventListener('resize', () => {
    setModalOpen(false);
  });

  return null;

  // return (
  //   <SiteHeader animated className="tds-shell-masthead">
  //     <SiteLogo appTitle="Express React Scaffold" />

  //     {/* ---------- Desktop ---------- */}
  //     {isDesktopUp && (
  //       <>
  //         <SiteNavItems align="center">
  //           <NavLink animated href="/" text="Home" />
  //           <NavLink animated href="/admin" text="Admin" />
  //         </SiteNavItems>
  //         <SiteNavItems align="end">
  //           <NavItem animated href="/logout" text="Logout" />
  //         </SiteNavItems>
  //       </>
  //     )}

  //     {/* ---------- Mobile ---------- */}

  //     {!isDesktopUp && (
  //       <SiteNavItems align="end">
  //         <NavItem animated onClick={() => setModalOpen(true)} text="Menu" />
  //       </SiteNavItems>
  //     )}

  //     {!isDesktopUp && (
  //       <Modal
  //         className="tds-site-header-modal tds-modal--sheet-small tds-scrim--white"
  //         onClose={() => {
  //           setModalOpen(false);
  //         }}
  //         open={modalOpen}
  //         variant="sheet-right"
  //       >
  //         <ModalContent key="mobile-content">
  //           <SiteNavItems key="modal-content-navitems" layout="vertical">
  //             <NavLink animated href="/" text="Home" />
  //             <NavLink animated href="/admin" text="Admin" />
  //           </SiteNavItems>
  //         </ModalContent>
  //       </Modal>
  //     )}
  //   </SiteHeader>
  // );
};
