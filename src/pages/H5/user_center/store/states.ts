
export interface HomeState {
  name: string;
  total: number;
  isLogin: boolean;
  postList: object[];
}

export const state: HomeState = {
  name: '',
  total: 0,
  isLogin: false,
  postList: [],
};
