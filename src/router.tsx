import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import PropTypes from 'prop-types';
import {
  Route, Switch, Redirect, routerRedux,
} from 'dva/router';
import dynamic from 'dva/dynamic';
import { RoutesConfig } from '@/config/routers';
import App from './routes/app';

const { ConnectedRouter } = routerRedux;

interface IRoutersProps {
  history: any;
  app: any;
}

const Routers: React.FC<IRoutersProps> = ({ history, app }) => {
  return (
    <ConfigProvider locale={zhCN}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/app/hooks" />} />
            <Route exact path="/app" render={() => <Redirect to="/app/hooks" />} />
            <Route exact path="/app/index" render={() => <Redirect to="/app/hooks" />} />
            {
              RoutesConfig.map(({ path, exact, ...dynamics }: any, key) => (
                <Route
                  key={key as number}
                  exact={exact !== false}
                  path={path}
                  component={dynamic({
                    app,
                    ...dynamics,
                  }) as any}
                />
              ))
            }
            <Redirect to="/app/hooks" />
          </Switch>
        </App>
      </ConnectedRouter>
    </ConfigProvider>
  );
};

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
};

export default Routers;
