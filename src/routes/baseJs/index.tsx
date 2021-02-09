import React, { useState } from 'react';
import { Input } from 'antd';
import { connect, DispatchProp } from 'react-redux';
import Header from '@/components/Header';
import { GlobalState } from '@/models/types';
import MTree from '@/components/Tree';
import { BaseJsActions } from '@/models/baseJs';
import { baseJsTreeData } from '@/config/treeData';
import MCanvas from './canvas';

import styles from './index.less';

interface IProps extends DispatchProp {
  selected: string[];
  isShowTree: boolean;
}

const BaseJs: React.FC<IProps> = ({
  selected, isShowTree, dispatch,
}) => {
  const [selectedTree, setSelectedTree] = useState<string>(selected[0]);
  const selectItem = (data: string[]) => {
    dispatch(BaseJsActions.reducers.save({ selected: data }));
    data.length > 0 && setSelectedTree(data[0]);
  };

  const controlDisplayOfTree = () => {
    dispatch(BaseJsActions.reducers.save({ isShowTree: !isShowTree }));
  };

  return (
    <div className={styles.baseWrapper}>
      <MTree
        data={baseJsTreeData}
        selected={selected}
        isShowTree={isShowTree}
        selectItem={selectItem}
        controlDisplayOfTree={controlDisplayOfTree}
      />
      <div className={styles.right}>
        <Header title={selectedTree}>
          <Input className={styles.baseInput} />
        </Header>
        <div className={styles.rightContent}>
          {selectedTree === 'canvas' && <MCanvas />}
        </div>
      </div>
    </div>
  );
};

export default connect((state: GlobalState) => ({
  selected: state.baseJs.selected,
  isShowTree: state.baseJs.isShowTree,
}))(BaseJs);
