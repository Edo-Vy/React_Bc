// rcc
import React, { Component } from "react";
// Kết nối redux
import { connect } from "react-redux";

//export default class DemoTangGiamSL extends Component {
class DemoTangGiamSL extends Component {
  render() {
    console.log(this.props); // -> dispatch : kết nối thành công với redux
    return (
      <div className="container">
        <h3>Demo Tăng Giảm Số Lượng</h3>
        <h3>Number : {this.props.numbers}</h3>
        <button
          className="btn btn-success"
          onClick={() => {
            // Các bước đưa dữ liệu lên làm thay đổi state
            // B1 : Tạo ra object action
            const action = {
              type: "TANG_SL", // Thuộc tính bắt buộc phải có
              payload: 1,
            };
            // B2 : Dùng props.dispatch để đưa dữ liệu lên redux
            this.props.dispatch(action);
          }}
        >
          +
        </button>
      </div>
    );
  }
}

// lấy dữ liệu từ redux về và biến thành this.props của component đó : state -> đại diện trên state devtool
// truyền hàm mapStateToProps xuống connect
const mapStateToProps = (state) => {
  // return về object gì thì object đó sẽ là props của component đó
  return {
    numbers: state.number,
    state: state,
  };
};

// Viết gọn
export default connect(mapStateToProps)(DemoTangGiamSL);

// conect() tiếp tục gọi hàm connect()() : callback
// Tạo ra component chứa logic của redux
// const ComponentRedux = connect(mapStateToProps)(DemoTangGiamSL);
// export default ComponentRedux; // Khái niệm HOC

/**
 *  Function có 1 lệnh return  về object thì viết tắt
 * (param) =>{ return { prop 1:'...' } }
 * ==== viết tắt thành
 * (param) =>( {} )
 * -- { return } : sẽ được chuyển thành ()
 */

//==== phím tắt rcredux : tạo nhanh component Redux
// import React, { Component } from 'react'
// import { connect } from 'react-redux'

// export class DemoTangGiamSL extends Component {
//   render() {
//     return (
//       <div>DemoTangGiamSL</div>
//     )
//   }
// }

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(DemoTangGiamSL)
