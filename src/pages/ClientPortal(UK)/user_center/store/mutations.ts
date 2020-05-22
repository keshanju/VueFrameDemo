import {HomeState} from "@/pages/ClientPortal/user_center/store/home";

export const mutations = {
  addCount(state: HomeState, payload: any) {
    payload ? (state.total += payload) : state.total++;
  },
};

