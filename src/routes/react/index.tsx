import React, { useState } from 'react';
import { connect, DispatchProp } from 'react-redux';
import { EllipsisOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { ReactActions } from '@/models/react';
import { GlobalState } from '@/models/types';
import MModel from '@/components/MModel';
import MTree from '@/components/Tree';
import { reactTreeData } from '@/config/treeData';
import MTable from '@/components/MTable';
import Header from '@/components/Header';

import styles from './index.less';

interface IProps extends DispatchProp {
  selected: string[];
  setSelectTree: any;
  isShowTree: any;
  closeTree: any;
}

const UseReact: React.FC<IProps> = ({
  selected, setSelectTree, isShowTree, closeTree, dispatch,
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  const showModel = () => {
    setVisible(true);
  };

  const closeModel = () => {
    setVisible(false);
  };

  const onSubmit = () => {
    setVisible(false);
  };

  const renderAction = () => (
    () => {
      return (
        <div className={styles.actionWrapper}>
          <Button className={styles.editButton} onClick={showModel}>EDIT</Button>
          <Button className={styles.editButton}>DELE</Button>
          <EllipsisOutlined className={styles.ellIcon} />
        </div>
      );
    }
  );

  const selectItem = (data: string[]) => {
    dispatch(ReactActions.reducers.save({ selected: data }));
  };

  const controlDisplayOfTree = () => {
    dispatch(ReactActions.reducers.save({ isShowTree: !isShowTree }));
  };

  return (
    <div className={styles.reactWrapper}>
      <MTree
        data={reactTreeData}
        selected={selected}
        isShowTree={isShowTree}
        selectItem={selectItem}
        controlDisplayOfTree={controlDisplayOfTree}
      />
      <div className={styles.right}>
        <Header title="REACT">
          <div>
            search
          </div>
        </Header>
        <div className={styles.tableContent}>
          <MTable renderAction={renderAction} />
        </div>
      </div>
      <MModel
        width={1000}
        closeModel={closeModel}
        visible={visible}
        title="REACTRECORD"
        maskClosable={false}
      >
        <div className={styles.model_Wrapper}>
          <div className={styles.content}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => {
              return (
                <div className={styles.modelContent} key={i}>
                  <span className={styles.contentTitle}>name:</span>
                  <div className={styles.modelInput}>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
                </div>
              );
            })}
          </div>
          <div className={styles.actionWrapper}>
            <Button className={styles.modelBtn} type="primary" onClick={onSubmit}>确定</Button>
            <Button className={styles.modelBtn} onClick={() => closeModel && closeModel()}>取消</Button>
          </div>
        </div>
      </MModel>
    </div>
  );
};

export default connect((state: GlobalState) => ({
  selected: state.react.selected,
  isShowTree: state.react.isShowTree,
}))(UseReact);
