const stateDefault = "./img/products/red-car.jpg";

export const imgCarReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHANGE_COLOR": {
      // B1 : Lấy dữ liệu gửi lên từ action
      const { payload } = action;
      // B2 : Xử lý thay đổi state
      state = payload;
      // B3 : return về state mới
      return state; // immutable : tính bất biến của redux
    }
    default:
      return state;
  }
};
