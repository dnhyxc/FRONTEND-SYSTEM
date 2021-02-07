import {
  Model, createActionCreaters,
} from '@shuwen/dva-ts-wrapper';
import * as Service from '@/services/project';
import { Result } from '@/utils/tool';
import {
  GlobalState,
} from './types';

interface ProjectParams {
  id: number | null;
  desc: string;
  checked: boolean;
}

export type IProjectModelState = {
  selectedProject: ProjectParams[];
}

interface IReducersPayloads {
  updateSelectedProject: Partial<IProjectModelState>;
  save: void | Partial<IProjectModelState>;
}

interface IEffectsPayloads {
  getProjectList: Service.ProjectParams;
  addProjects: any;
}

const projectModel: Model<IProjectModelState, GlobalState, IReducersPayloads, IEffectsPayloads> = {
  namespace: 'project',
  state: {
    selectedProject: [],
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    updateSelectedProject(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *getProjectList({ payload }, { call, put }) {
      console.log(payload);
      const res: Result<any> = yield call(Service.getProjectList, payload);
      return res;
    },

    *addProjects({ payload }, { call, put }) {
      const res: Result<any> = yield call(Service.addProjects, payload);
      return res;
    },
  },
};

export default projectModel;

export const projectActions = createActionCreaters(projectModel);
