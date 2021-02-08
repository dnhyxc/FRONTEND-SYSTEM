import {
  Model, createActionCreaters,
} from '@/utils/dva-ts-wrapper';
// import * as Service from '@/services/home';
// import { Result } from '@/utils/tool';
import {
  GlobalState,
} from './types';

export interface UserInfoTypes {
  userName: string;
  passWord: number;
}

export interface ILoginModelState {
  userInfo: UserInfoTypes;
}

interface IReducersPayloads {
  save: void | Partial<ILoginModelState>;
}

interface IEffectsPayloads {

}

const LoginModel: Model<ILoginModelState, GlobalState, IReducersPayloads, IEffectsPayloads> = {
  namespace: 'login',
  state: {
    userInfo: {
      userName: '',
      passWord: NaN,
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {

  },
};

export default LoginModel;

export const LoginActions = createActionCreaters(LoginModel);
