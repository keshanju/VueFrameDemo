
export const actions = {
  asyncAdd(context: any, paylod: any) {
    setTimeout(() => {
      context.commit('addCount', paylod.num);
    }, 1000);
  },
};
