import { combineReducers, createStore } from "redux";
import { numberReducer } from "./reducers/numberReducer";
import { imgCarReducer } from "./reducers/imgCarReducer";
import { commentReducer } from "./reducers/commentReducer";
// export defaul nên ko có {}
import burgerReducer from "./reducers/burgerReducer";

const rootReducer = combineReducers({
  // Nơi chứa các state của ứng dụng
  // khi gọi action thì tất cả các hàm đều chạy nên -> switch... case để xét
  number: numberReducer,
  imgCar: imgCarReducer ,
  commentReducer : commentReducer,
  burgerReducer : burgerReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
