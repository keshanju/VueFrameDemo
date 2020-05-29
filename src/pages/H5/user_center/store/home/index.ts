import HttpClient from "@/ts/net/HttpClient"
import {IdataModel} from "@/ts/models/IdataModel"
import {Commit} from 'vuex'

export interface HomeState {
  name: string;
  total: number;
  isLogin: boolean;
  postList: object[];
}

const state: HomeState = {
  name: '',
  total: 0,
  isLogin: false,
  postList: [],
};

const getters = {};

const mutations = {
  add(state: HomeState, payload: any) {
    payload ? (state.total += payload) : state.total++;
  },
};

const actions = {
  asyncAdd(context: any, paylod: any) {
    setTimeout(() => {
      context.commit('add', paylod.num);
    }, 1000);
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}
