// import {getBaseInfo} from '../service/login';
const initState = {
  name:"wxc123",
  age:'29'
};
const PreservationModel = {
    namespace: 'preservation',
    state: initState,
    effects: {
      * getInfo({ payload }, { call, put }) {
        const { callback } = payload;
        // const dataRes = yield call(getBaseInfo);
        // const resData = (dataRes && dataRes.code === 1) ? dataRes.data : {};
        // 更新状态，在页面可以用props取
        yield put({
          type: 'saveInfo',
          payload: {
            ...payload
          }
        });
        if (callback) {
          callback(...payload);
        }
      }
    },

    reducers: {
      saveInfo(state, { payload }) {
        return {
          ...state,
          ...payload
        };
      },
      clear() {
        return initState;
      }
    }
};

export default PreservationModel;