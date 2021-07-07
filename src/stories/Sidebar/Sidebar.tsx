import React from 'react';
import './sidebar.css';
import logo from '../assets/9th-Gear-Logo.png';
import { NavLink } from 'react-router-dom';

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
      <img src={logo} alt="9Th gear" width="154" height="34" className="brand" />
      <ul className="menuItem">
        {
          pageList.map((item: any) => {
            return (
              <li key={item.id}>
                <NavLink
                  to={item.slug}
                  isActive={(match, location) => {
                    if (!match) {
                      return false;
                    }
                    console.log(location.pathname, item.slug);

                    // only consider an event active if its event id is an odd number
                    //const eventID = parseInt(match.params.eventID);
                    return location.pathname === item.slug;
                  }}
                >
                  {item.title}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};
