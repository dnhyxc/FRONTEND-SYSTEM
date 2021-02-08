import {
  Model, createActionCreaters,
} from '@/utils/dva-ts-wrapper';
// import * as Service from '@/services/home';
// import { Result } from '@/utils/tool';
import {
  GlobalState,
} from './types';

export interface IMenuModelState {
  menuList: string[];
}

interface IReducersPayloads {
  save: void | Partial<IMenuModelState>;
}

interface IEffectsPayloads {

}

const menuModel: Model<IMenuModelState, GlobalState, IReducersPayloads, IEffectsPayloads> = {
  namespace: 'menu',
  state: {
    menuList: [],
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {

  },
};

export default menuModel;

export const menuActions = createActionCreaters(menuModel);
