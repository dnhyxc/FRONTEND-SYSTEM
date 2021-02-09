import React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { GlobalState } from '@/models/types';
import Header from '@/components/Header';
import styles from './index.less';

interface IProps extends DispatchProp {
  history: any;
}

const Auth: React.FC<IProps> = ({ history }) => {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <Header title="AUTH">
          search
        </Header>
        <div className={styles.content}>
          Auth content
        </div>
      </div>
    </div>
  );
};

export default connect((state: GlobalState) => ({

}))(Auth);
