import React from 'react';
import { Tabs, Input, Button } from 'antd';
import icon from '../../assets/image/logo192.png';
import styles from './index.less';

const { TabPane } = Tabs;

const Login: React.FC = () => {
  const onTabChange = () => {
    console.log(11111);
  }

  return (
    <div className={styles.login}>
      <div className={styles.loginInfo}>
        <div className={styles.logo}>
          <div className={styles.logoImg}>
            <img className={styles.icon} src={icon} alt="" />
          </div>
          <div className={styles.logoText}>FRONTEND</div>
        </div>
        <div className={styles.userInfo}>
          <Tabs defaultActiveKey="1" onChange={onTabChange} className={styles.loginTabs} animated>
            <TabPane tab={<div className={styles.account}>账号登录</div>} key="1">
              <div className={styles.act}>
                <Input placeholder='请输入账号' className={styles.actInp} />
              </div>
              <div className={styles.act}>
                <Input placeholder='请输入密码' className={styles.actInp} />
              </div>
            </TabPane>
            <TabPane tab={<div className={styles.account}>手机快捷登录</div>} key="2">
              <div className={styles.act}>
                <Input placeholder='请输入手机号' className={styles.actInp} />
              </div>
              <div className={styles.act}>
                <Input placeholder='请输入验证码' className={styles.actInp} />
              </div>
            </TabPane>
          </Tabs>
        </div>
        <Button className={styles.loginSubmit}>登录</Button>
      </div>
    </div >
  )
}

export default Login;