// import React, { ReactNode } from 'react';
// import { connect, DispatchProp } from 'react-redux';
// import { Redirect, RouteComponentProps } from 'dva/router';
// import { GlobalState } from '@/models/types';
// import { UserInfoTypes } from '@/models/login';
// import MainLayout from './layout';
// import Login from './login';
// import styles from './app.less';

// interface IAppProps extends RouteComponentProps, DispatchProp {
//   children: ReactNode;
//   userInfo: UserInfoTypes;
//   location: any;
//   history: any;
// }

// const App: React.FC<IAppProps> = ({ children, userInfo }) => {
//   if (!userInfo.userName && !userInfo.passWord) {
//     if (location.pathname !== '/app/login') {
//       return <Redirect to="/app/login" />;
//     }
//   }

//   if (location.pathname === '/app/login') {
//     return <Login />;
//   }

//   return (
//     <div className={styles.container}>
//       <MainLayout>
//         {children}
//       </MainLayout>
//     </div>
//   );
// };

// export default connect((state: GlobalState) => ({
//   userInfo: state.login.userInfo,
// }))(App);

import React, { ReactNode } from 'react';
import { connect } from 'dva';
import { GlobalState } from '@/models/types';
import MainLayout from './layout';
import styles from './app.less';

interface IProps {
  children: ReactNode;
}

const App: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <MainLayout>
        {children}
      </MainLayout>
    </div>
  );
};

export default App;
// export default connect((state: GlobalState) => ({

// }))(App);
