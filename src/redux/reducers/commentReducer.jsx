const stateDefault = {
  commentInfo: {
    name: "",
    content: "",
  },
  arrComment: [
    { name: "Minh Quân", content: "like like like" },
    { name: "Minh Minh", content: "like like like" },
  ],
};

export const commentReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE": {
      // B1: lấy dữ liệu từ action gửi lên
      const { id, value } = action.payload;
      // B2 : Đối với state là object hoặc arr => clone state ra
      let commentInfoUpdate = { ...state.commentInfo };
      // B3 : Thay đổi state
      commentInfoUpdate[id] = value;
      // B4 : Gán state cũ = state update
      state.commentInfo = commentInfoUpdate;
      // B5: return về state mới
      return { ...state }; // immutable : tính bất biến của redux
    }
    case "HANDLE_SUBMIT": {
      // B1 : Lấy dữ liệu từ action gửi lên
      const comment = action.payload;
      // B2 : Đối với state là object hoặc arr => clone state ra
      let arrcommentUpdate = [...state.arrComment];
      arrcommentUpdate.push(comment);
      // B3: Thay đổi state
      state.arrComment = arrcommentUpdate;
      console.log("arrComment", state.arrComment);
      // B4 : return về state mới
      return { ...state };
    }
    case "DELETE_COMMENT": {
      // B1 : Lấy dữ liệu action gửi lên
      const delCom = action.payload;
      // B2 : Đối với state là object hoặc arr => clone state ra
      let arrcommentUpdate = [...state.arrComment];
      // B3: Thay đổi state
      arrcommentUpdate.splice(delCom, 1);
      state.arrComment = arrcommentUpdate;
      // B4 : return về state mới
      return { ...state };
    }
    case "EDIT_COMMENT": {
      // B1 : lấy dữ liệu từ payload
      let index = action.payload;
      //B2 : Đối với state là ob hay arr => clone state ra
      let commentInfoUpdate = { ...state.commentInfo };
      // B3 : Thay đổi state
      commentInfoUpdate = state.arrComment[index];
      state.commentInfo = commentInfoUpdate;
      // B4 : return về state mới
      return { ...state };
    }
    case "UPDATE_COMMENT": {
      // B2: clone state
      let arrcommentUpdate = [...state.arrComment];
      // Tìm comment và name trong mảng ( Dựa vào name của state.commentInfo)
      let cmt = arrcommentUpdate.find(
        (comment) => comment.name === state.commentInfo.name);
      if (cmt) {
        cmt.content = state.commentInfo.content;
      }
      // Thay đổi state
      state.arrComment = arrcommentUpdate;
      // return về state mới
      return { ...state };
    }
    default:
      return state;
  }
};

// Nhớ clone state  ra
/**
 *  action {}, [] : reference value (dữ liệu tham chiếu) Nhớ clone state  ra
 * Vì redux có immutable : tính bất biến của redux
 *  Khi không clone ra, mặc dù dữ liệu thấy có thay đổi nhưng không load lạ giao diện (render)
 */
