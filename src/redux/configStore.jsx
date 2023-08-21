import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  // Nơi chứa các state của ứng dụng
  // khi gọi action thì tất cả các hàm đều chạy nên -> switch... case để xét
  number: (state = 1, action) => {
    switch (action.type) {
      case "TANG_SL": {
        // B1 : Lấy giá trị payload từ action gửi lên
        const { payload } = action;
        // B2 : Thay đổi state (this.setState)
        state += payload;
        // B3 : return về state mới
        return state;
      }
    }
    return state;
  },
  imgCar: (state = "./img/products/red-car.jpg", action) => {
    switch (action.type) {
      case "CHANGE_COLOR": {
        // B1 : Lấy dữ liệu gửi lên từ action
        const { payload } = action;
        // B2 : Xử lý thay đổi state
        state = payload;
        // B3 : return về state mới
        return state;
      }
      default:
        return state;
    }
  },
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
