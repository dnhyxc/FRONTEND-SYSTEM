import {
  Model, createActionCreaters,
} from '@/utils/dva-ts-wrapper';
// import * as Service from '@/services/home';
// import { Result } from '@/utils/tool';
import {
  GlobalState,
} from './types';

export interface IReactModelState {
  selected: string[];
  isShowTree: boolean;
}

interface IReducersPayloads {
  save: void | Partial<IReactModelState>;
}

interface IEffectsPayloads {

}

const ReactModel: Model<IReactModelState, GlobalState, IReducersPayloads, IEffectsPayloads> = {
  namespace: 'react',
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

export default ReactModel;

export const ReactActions = createActionCreaters(ReactModel);
