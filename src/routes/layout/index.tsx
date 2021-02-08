import React, { ReactNode, useState } from 'react';
import { Layout } from 'antd';
import MMenu from '@/components/Menu';

import styles from './index.less';

const { Sider, Content } = Layout;

interface ILayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<ILayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className={styles.layout}>
      <Sider
        width={240}
        theme="light"
        className="sider"
        onClick={onCollapsed}
      >
        <MMenu />
      </Sider>
      <Layout className={styles.layoutContent}>
        <Content className={styles.content}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
