import React from 'react';

import './header.css';

interface HeaderProps {
  searchStr?: "";
}

export const Header = ({ searchStr }: HeaderProps) => (
  <header className="storybook-header">
    <div>
      <div className="searchBar">
        <input type="search" placeholder="Search" />
      </div>
      <div className="actionsBar">

      </div>
    </div>
  </header>
);
