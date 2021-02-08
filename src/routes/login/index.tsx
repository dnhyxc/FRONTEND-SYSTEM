import React, { useState } from 'react';
import { Tabs, Input, Button } from 'antd';
import { GlobalState } from '@/models/types';
import { connect, DispatchProp } from 'react-redux';
import { withRouter } from 'dva/router';
import { LoginActions, UserInfoTypes } from '@/models/login';
import icon from '@/assets/image/logo192.png';
import styles from './index.less';

const { TabPane } = Tabs;

interface IProps extends DispatchProp {
  userInfo: UserInfoTypes;
  history: any;
}

const Login: React.FC<IProps> = ({ dispatch, userInfo, history }) => {
  const [uname, setUname] = useState<string>();
  const [pwd, setPwd] = useState<number>();
  const [tabKey, setTabKey] = useState<string>('1');

  const onTabChange = (key: string) => {
    setTabKey(key);
  };

  const onInputName = (e: any) => {
    setUname(e.target.value);
  };

  const onInputPwd = (e: any) => {
    setPwd(e.target.value);
  };

  const onLogining = () => {
    if (tabKey === '1') {
      if (uname && pwd) {
        const info = {
          userName: uname,
          passWord: pwd,
        };
        dispatch(LoginActions.reducers.save({ userInfo: info }));
        history.push('/app/home');
      }
    } else {
      console.log('手机快捷登录');
    }
  };

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
                <Input value={uname} onChange={onInputName} placeholder="请输入账号" className={styles.actInp} bordered={false} />
              </div>
              <div className={styles.actPwd}>
                <Input.Password value={pwd} onChange={onInputPwd} placeholder="请输入密码" className={styles.pwd} bordered={false} />
              </div>
            </TabPane>
            <TabPane tab={<div className={styles.account}>手机快捷登录</div>} key="2">
              <div className={styles.act}>
                <Input placeholder="请输入手机号" className={styles.actInp} bordered={false} />
              </div>
              <div className={styles.actPwd}>
                <Input.Password placeholder="请输入验证码" className={styles.pwd} bordered={false} />
              </div>
            </TabPane>
          </Tabs>
        </div>
        <Button className={styles.loginSubmit} onClick={onLogining}>登录</Button>
      </div>
    </div>
  );
};

export default withRouter(connect((state: GlobalState) => ({
  userInfo: state.login.userInfo,
}))(Login));
