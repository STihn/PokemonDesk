import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: any;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
