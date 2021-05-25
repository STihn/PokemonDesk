import React, { ReactNode } from 'react';
import cn from 'classnames';

import styles from './Layout.module.scss';

interface IProps {
  children: ReactNode;
  className: any;
}

const Layout: React.FC<IProps> = ({ children, className = null }) => (
  <div className={cn(styles.root, className)}>{children}</div>
);

export default Layout;
