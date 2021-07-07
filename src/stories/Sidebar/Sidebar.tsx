import React from 'react';
import './sidebar.css';
import logo from '../assets/9th-Gear-Logo.png';

interface SidebarProps {
  backgroundColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Sidebar = ({
  backgroundColor,
  ...props
}: SidebarProps) => {

  return (
    <div
      className={'storybook-sidebar'}
      style={{ backgroundColor }}
      {...props}
    >
      <img src={logo} alt="9Th gear" width="154" height="34" />
    </div>
  );
};
