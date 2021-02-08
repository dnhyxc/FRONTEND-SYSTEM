import React, { ReactNode } from 'react';
import MainLayout from './layout';
import styles from './app.less';

interface IAppProps {
  children: ReactNode;
}

const App: React.FC<IAppProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <MainLayout>
        {children}
      </MainLayout>
    </div>
  );
};

export default App;
