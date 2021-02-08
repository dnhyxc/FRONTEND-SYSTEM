import React from 'react';
import styles from './index.less';

interface IProps {
  children: any;
  title?: string;
}

const Header: React.FC<IProps> = ({ children, title }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerTitle}>{title}</div>
      <div className={styles.headerContent}>
        {children}
      </div>
    </div>
  )
}

export default Header;