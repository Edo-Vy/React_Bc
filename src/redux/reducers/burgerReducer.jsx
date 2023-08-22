// rxreducer
const initialState = {
  burger: [
    { id: "salad", price: 10, quantity: 2 },
    { id: "cheese", price: 5, quantity: 2 },
    { id: "beef", price: 20, quantity: 2 },
  ],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "CHANGE_QUANTITY": {
      // B1 : Lấy dữ liệu từ payload ra
      let { id, quantity } = payload;
      // B2 : clone state.burger
      let burgerUpdate = [...state.burger];
      let item = burgerUpdate.find((it) => it.id === id);
      if (item) {
        item.quantity += quantity;
        if(item.quantity == 0){
            alert ('Số Lượng Tối Thiểu Là 1');
            item.quantity = 1;
        }
      }
      // B3 : Thay đổi state
      state.burger = burgerUpdate;
      // B4 : return về state mới
      return { ...state };
    }

    default:
      return state;
  }
};


/**
 * Đối với những dữ liệu có thể tính toán được => sẽ không đưa vào lưu trữ (state)
 */