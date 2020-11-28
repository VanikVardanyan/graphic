import { runInAction, makeAutoObservable } from 'mobx';

import request from '../constans/api';

class VisualGraph {
  data = {};
  version = 'v1';
  isLoad = false;
  isError = false;

  constructor() {
    makeAutoObservable(this);
  }

  changeDataVersion(version) {
    this.version = version;
  }

  async fetchGraph() {
    try {
      const response = await request.get('');
      runInAction(() => {
        this.data = response?.data;
      });
    } catch (e) {
      runInAction(() => {
        this.isError = true;
      });
    } finally {
      runInAction(() => {
        this.isLoad = true;
      });
    }
  }
}

export default new VisualGraph();
