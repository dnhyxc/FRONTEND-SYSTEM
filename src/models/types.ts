import { IhomeModelState } from './home';
import { IProjectModelState } from './project';
import { IMenuModelState } from './menu';
import { IBaseJsModelState } from './baseJs';
import { IReactModelState } from './react';
import { ILoginModelState } from './login';

export type Loading = Readonly<{
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    home?: boolean;
    project?: boolean;
    menu?: boolean;
    baseJs?: boolean;
    react?: boolean;
    login?: boolean;
  };
}>;

export interface ILocation {
  pathname: string;
  search: string;
  hash: string;
  key: string;
}

export type IRouterState = Readonly<{
  location: ILocation;
  action: string;
}>;

export type GlobalState = Readonly<{
  router: IRouterState;
  loading: Loading;
  home: IhomeModelState;
  project: IProjectModelState;
  menu: IMenuModelState;
  baseJs: IBaseJsModelState;
  react: IReactModelState;
  login: ILoginModelState;
}>;

export interface Data {
  [key: string]: any;
}

// onResult 回调函数接口
export interface IOnResultCallBack<T> {
  onResult: (error: Error | null | string, data?: T) => void;
}
