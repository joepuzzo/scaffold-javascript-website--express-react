import React from 'react';
import Starman from '../starman.svg';
import { Link } from 'react-router-dom';

export const NotAuthorized = () => {
  return (
    <>
      <div className="site--app tds-shell">
        <main className="tds-shell-content">
          <div className="tds-content_container error-container">
            <div className="tds-layout tds-layout-2col-has_main tds-layout-main--right">
              <main className="tds-layout-item tds-layout-main site-content site-content--line_length">
                <div className="error-image">
                <Starman />
                </div>
              </main>
              <aside className="tds-layout-item tds-layout-aside">
                <div className="error-text">
                  <h1 className="error-code">Unauthorized</h1>
                  <h2 className="tds-text--h2">You do not have permission to access this page.</h2>
                  <p>
                    Please Contact Administrator to request Access
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}