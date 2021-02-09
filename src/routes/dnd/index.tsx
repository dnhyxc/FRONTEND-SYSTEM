import React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { GlobalState } from '@/models/types';
import Header from '@/components/Header';
import styles from './index.less';

interface IProps extends DispatchProp {
  history: any;
}

const Dnd: React.FC<IProps> = ({ history }) => {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <Header title="DND">
          search
        </Header>
        <div className={styles.content}>
          Dnd content
        </div>
      </div>
    </div>
  );
};

export default connect((state: GlobalState) => ({

}))(Dnd);
