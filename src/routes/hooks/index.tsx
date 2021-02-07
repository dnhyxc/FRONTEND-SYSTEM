import React, { useState } from 'react';
import { Button } from 'antd';
import { connect, DispatchProp } from 'react-redux';
import { GlobalState } from '@/models/types';
import styles from './index.less';

interface IProps extends DispatchProp {
  history: any;
}

const HooksDemo: React.FC<IProps> = ({ history }) => {
  const [count, setCount] = useState<number>(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const toHooks = () => {
    history.push('/app/class');
  };

  return (
    <div className={styles.container}>
      <Button type="primary" onClick={addCount}>click add count</Button>
      <div className={styles.content}>
        click {count} times
      </div>
      <Button type="primary" onClick={toHooks}>toClassDemo</Button>
    </div>
  );
};

export default connect((state: GlobalState) => ({

}))(HooksDemo);
