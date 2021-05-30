import React from 'react';

import styles from './Heading.module.scss';

interface IProps {
  children: React.ReactNode;
  size: number;
  className?: any;
}

const Heading: React.FC<IProps> = ({ children, size, className }) => {
  const Tag = `h${size}` as keyof JSX.IntrinsicElements;

  return <Tag className={className}>{children}</Tag>;
};

export default Heading;
