const stateDefault = {
  commentInfo: {
    name: "Minh",
    content: "",
  },
  arrComment: [
    { name: "Nguyễn Văn A", content: "like like like" },
    { name: "Minh Quân", content: "like like like" },
    { name: "Minh Minh", content: "like like like" },
  ],
};

export const commentReducer = (state = stateDefault, action) => {
  switch (action.type) {

    case "HANDLE_CHANGE":{
        // B1: lấy dữ liệu từ action gửi lên
        const {id,value} = action.payload;
        // B2 : Đối với state là object hoặc arr => clone state ra
        let commentInfoUpdate = {...state.commentInfo};
        // B3 : Thay đổi state
        commentInfoUpdate[id] = value;
        // B4 : Gán state cũ = state update
        state.commentInfo = commentInfoUpdate;
        // B5: return về state mới
        return {...state};  // immutable : tính bất biến của redux
    }
    default:
      return state;
  }
};

// Nhớ clone state  ra 