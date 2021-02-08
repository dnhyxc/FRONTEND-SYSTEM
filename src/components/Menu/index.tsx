import React, {
  useState, useEffect,
} from 'react';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import menuList from '@/config/menu';
import { withRouter } from 'dva/router';
import MScrollbar from '../MScrollbar';
import styles from './index.less';

interface IProps {
  history: any;
}

const MMenu: React.FC<IProps> = ({ history }) => {
  const [isUp, setIsUp] = useState<boolean>(false);
  const [isMediaUp, setIsMediaUp] = useState<boolean>(false);
  const [isApplyUp, setisApplyIsUp] = useState<boolean>(false);
  const [isAdvancedUp, setIsAdvancedUp] = useState<boolean>(false);
  const [mediaKey, setMediaKey] = useState<string>();
  const [applyKey, setApplyKey] = useState<string>();
  const [advancedKey, setAdvancedKey] = useState<string>();
  const [listData, setListData] = useState<any[]>([]);

  const setChecked = (data: any) => {
    const newData = JSON.parse(JSON.stringify(data));
    const res = newData.map((i: any, mi: number) => {
      Object.defineProperty(i, 'checked', { value: false, writable: true, enumerable: true });
      if (Object.keys(i).includes('children')) {
        i.children.map((child: any, index: number) => {
          if (mi === 0 && index === 0) {
            return Object.defineProperty(child, 'checked', { value: true, writable: true, enumerable: true });
          }
          return Object.defineProperty(child, 'checked', { value: false, writable: true, enumerable: true });
        });
      }
      return i;
    });
    setListData(res);
  };

  useEffect(() => {
    setChecked(menuList);
  }, []);

  const onTitleClick = (key: string, checked: boolean) => {
    setIsUp(!isUp);
    switch (key) {
      case 'media':
        setIsMediaUp(!isMediaUp);
        setMediaKey(key);
        break;
      case 'frame':
        setisApplyIsUp(!isApplyUp);
        setApplyKey(key);
        break;
      case 'advanced':
        setIsAdvancedUp(!isAdvancedUp);
        setAdvancedKey(key);
        break;

      default:
        break;
    }
  };

  const onItemClick = (key: string, path: string) => {
    history.push(path);
    const res = listData.map(i => {
      i.children.forEach((child: any) => {
        child.checked = false;
        if (child.key === key) {
          child.checked = true;
        }
      });
      return i;
    });
    setListData(res);
    sessionStorage.setItem('menuDate', JSON.stringify(listData));
  };

  const list = JSON.parse(sessionStorage.getItem('menuDate') as string);

  return (
    <div className={styles.menu}>
      <div className={styles.menuHeader}>
        <div className={styles.title}>FRONTEND</div>
      </div>
      <div className={styles.menuContainer}>
        <MScrollbar>
          {
            (list || listData).map((i: any) => {
              return (
                <div key={i.key} className={styles.menuList}>
                  <div className={styles.menuTitle}>
                    <div className={styles.title} onClick={() => onTitleClick(i.key, i.checked)}>
                      {i.title}
                      {
                        (isMediaUp && i.key === mediaKey) || (isApplyUp && i.key === applyKey) || (isAdvancedUp && i.key === advancedKey)
                          ? <CaretDownOutlined className={styles.Icon} />
                          : <CaretUpOutlined className={styles.Icon} />
                      }
                    </div>
                    <div
                      className={
                        (isMediaUp && i.key === mediaKey) || (isApplyUp && i.key === applyKey) || (isAdvancedUp && i.key === advancedKey)
                          ? styles.close
                          : styles.itemList
                      }
                    >
                      {i.children.map((item: any) => {
                        return (
                          <div key={item.key} className={styles.menuItem}>
                            <div
                              className={item.checked ? styles.active : styles.link}
                              onClick={() => onItemClick(item.key, item.path)}
                            >
                              {item.title}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })
          }
        </MScrollbar>
      </div>
    </div>
  );
};

export default withRouter(MMenu);
