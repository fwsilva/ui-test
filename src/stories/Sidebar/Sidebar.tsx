import React from 'react';
import './sidebar.css';
import logo from '../assets/9th-Gear-Logo.png';

interface SidebarProps {
  backgroundColor?: string;
  pageList: Array<any>;
}

/**
 * Primary UI component for user interaction
 */
export const Sidebar = ({
  backgroundColor,
  pageList,
  ...props
}: SidebarProps) => {

  return (
    <div
      className={'storybook-sidebar'}
      style={{ backgroundColor }}
      {...props}
    >
      <img src={logo} alt="9Th gear" width="154" height="34" />
      {
        pageList.map((item: any) => {
          return <div key={item.id}>{item.title}</div>
        })
      }
    </div>
  );
};
