import React from 'react';

import styles from './Heading.module.scss';

const Heading = ({ children, size }) => {
  let tag;
  switch (size) {
    case '1':
      tag = '<h1>';
    case '2':
      tag = 'h2';
    case '3':
      tag = 'h3';
    case '4':
      tag = 'h4';
  }

  return (
    <div className={styles.root}>
      <tag>{children}</tag>
    </div>
  );
};

export default Heading;
