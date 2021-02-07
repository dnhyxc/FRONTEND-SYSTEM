import React, { ReactNode } from 'react';
import { Layout } from 'antd';
import styles from './app.less';

const { Content } = Layout;

interface IAppProps {
  children: ReactNode;
}

const App: React.FC<IAppProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Layout className={styles.layout}>
        <Content className={styles.content}>
          {children}
        </Content>
      </Layout>
    </div>
  );
};

export default App;
