import {
  Model, createActionCreaters,
} from '@shuwen/dva-ts-wrapper';
import * as Service from '@/services/home';
import { Result } from '@/utils/tool';
import {
  GlobalState,
} from './types';

export interface timeDataParams {
  freezed?: string | boolean;
  id?: string;
  month?: string;
}

export type IhomeModelState = Readonly<{
  userInfo: Service.UserInfoResponse;
  timeData: timeDataParams;
}>

interface IReducersPayloads {
  save: void | Partial<IhomeModelState>;
}

interface IEffectsPayloads {
  getUserInfo: void;
  getTime: void;
  getProjectList: void;
}

const homeModel: Model<IhomeModelState, GlobalState, IReducersPayloads, IEffectsPayloads> = {
  namespace: 'home',
  state: {
    userInfo: {},
    timeData: {},
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *getUserInfo({ payload }, { call, put }) {
      const res: Result<Service.UserInfoResponse> = yield call(Service.getUserInfo);
      if (res.success) {
        yield put({
          type: 'save',
          payload: {
            userInfo: res.data || {},
          },
        });
      }
    },

    *getTime({ payload }, { call, put }) {
      const res: Result<Service.TimeDataResponse> = yield call(Service.getTime);
      return res;
    },

    // 获取项目列表，类型没来得及定义
    *getProjectList({ payload }, { call, put }) {
      const res: Result<unknown> = yield call(Service.getProjectList);
      return res;
    },
  },
};

export default homeModel;

export const homeActions = createActionCreaters(homeModel);
