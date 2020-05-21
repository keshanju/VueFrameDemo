import HttpClient from "@/ts/net/HttpClient"
import {IdataModel} from "@/ts/models/IdataModel"
import {Commit} from 'vuex'

export interface DepositState {
  account: string;
  total: number;
  isLogin: boolean;
  postList: object[];
}

const state: DepositState = {
  account: '',
  total: 0,
  isLogin: false,
  postList: [],
};

const getters = {};

const mutations = {
  addAccount(state: DepositState, payload: any) {
    payload ? (state.total += payload) : state.total++;
  },
};

const actions = {
  asyncAddaa(context: any, paylod: any) {
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
