import {
  Model, createActionCreaters,
} from '@/utils/dva-ts-wrapper';
// import * as Service from '@/services/home';
// import { Result } from '@/utils/tool';
import {
  GlobalState,
} from './types';

export interface IBaseJsModelState {
  selected: string[];
  isShowTree: boolean;
}

interface IReducersPayloads {
  save: void | Partial<IBaseJsModelState>;
}

interface IEffectsPayloads {

}

const BaseJsModel: Model<IBaseJsModelState, GlobalState, IReducersPayloads, IEffectsPayloads> = {
  namespace: 'baseJs',
  state: {
    selected: [],
    isShowTree: false,
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {

  },
};

export default BaseJsModel;

export const BaseJsActions = createActionCreaters(BaseJsModel);
