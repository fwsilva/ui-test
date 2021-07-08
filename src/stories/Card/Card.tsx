import React from 'react';
import './Card.css';

export interface CardProps {
  child: any;
}

/**
 * Primary UI component for user interaction
 */
export const Card = ({
  child = "Content goes here...",
  ...props
}: CardProps) => {

  return (
    <div className={'storybook-card'}>
      {child}
    </div>
  );
};
