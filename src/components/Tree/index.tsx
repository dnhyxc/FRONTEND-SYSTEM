import React, { useCallback } from 'react';
import { Tree } from 'antd';

import styles from './index.less';

const { TreeNode } = Tree;

function treeRender(menuList: any) {
  return (
    <>
      {menuList.map((item: any) => (
        <TreeNode
          title={item.name}
          key={item.id}
        >
          {item.child ? treeRender(item.child) : null}
        </TreeNode>
      ))}
    </>
  );
}

interface IProps {
  data: any;
  setSelectTree?: any;
  selected?: any;
  selectItem?: (data: string[]) => void;
  isShowTree?: boolean;
  controlDisplayOfTree?: () => void;
}

const MTree: React.FC<IProps> = ({
  data, selected, selectItem, controlDisplayOfTree, isShowTree,
}) => {
  const onCloseTree = useCallback(() => {
    controlDisplayOfTree && controlDisplayOfTree();
  }, [controlDisplayOfTree]);

  const onSelectItem = useCallback((val: any) => {
    selectItem && selectItem(val);
  }, [selectItem]);

  return (
    <div className={isShowTree ? styles.treeClose : styles.treeWrapper}>
      <div className={styles.treeList}>
        <Tree defaultExpandAll blockNode defaultSelectedKeys={selected} onSelect={onSelectItem}>
          {treeRender(data.child)}
        </Tree>
      </div>
      <div className={styles.closeTree} onClick={onCloseTree}>{isShowTree ? '>' : '<'}</div>
    </div>
  );
};

export default MTree;
