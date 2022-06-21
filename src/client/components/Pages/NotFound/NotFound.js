import React from 'react';
import Starman from '../starman.svg';
import { Link } from 'react-router-dom';

export const NotFound = () => {
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
                  <h1 className="error-code">404</h1>
                  <h2 className="tds-text--h2">I'm afraid I can't do that.</h2>
                  <p>
                    Join Starman back at the <Link className="tds-link" to="/">homepage</Link>
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