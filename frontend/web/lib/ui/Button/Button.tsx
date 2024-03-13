import React from 'react';
import classes from './Button.module.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props }: ButtonProps) => {
  const mode = primary ? classes['storybook-button-primary'] : classes['storybook-button-secondary'];

  return (
    <button type="button" className={[classes['storybook-button'], classes[`storybook-button-${size}`], mode].join(' ')} {...props}>
      {label}
    </button>
  );
};
