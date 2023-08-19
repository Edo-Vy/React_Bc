//rcc
import React, { Component } from "react";
import Child from "./Child";

export default class ReactLifecycle extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      like: 1,
      objectNumber: {
        number: 1,
      },
      count: 60,
    };
    console.log("constructor");
  }
  // static không sử dụng được con trỏ this => mục đích là từ state cũ trả về state mới
  // currentState là state trước khi thay đổi => this.state ={number : 1 }
  // hàm này tiền xử lý trước khi render => number = 2
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    // currentState.number = 2;

    // return về state mới, nếu giữ sate cũ thì return null
    // return currentState;
    return null;
  }
  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate");
    return true;
  }
  render() {
    console.log("render");
    return (
      <div className="container">
        {/* <h3>Num:{this.state.number}</h3>  */}
        <h3>Num:{this.state.objectNumber.number}</h3>

        <button
          className="btn btn-success mt-3"
          onClick={() => {
            // let obNum = this.state.objectNumber ->(PureComponent) phải clone ra địa chỉ ô nhớ mới, bản thân vị trí {} ko thay đổi chỉ có giá trị thuộc tính thay đồi nên phải dùng {...} để cấp vị trí ô nhớ mới
            let obNum = { ...this.state.objectNumber };
            obNum.number += 1;
            this.setState({
              objectNumber: obNum,
            });

            // this.setState({
            //     number : this.state.number + 1
            //   })
          }}
        >
          +
        </button>
        <h3>Like:{this.state.like}</h3>
        <button
          className="btn btn-success mt-3"
          onClick={() => {
            this.setState({
              like: this.state.like + 1,
            });
          }}
        >
          +
        </button>
        {/* <Child number={this.state.number}/> */}
        {/* nhận ob */}
        <Child obNumber={this.state.objectNumber} />
        <br />
        <h3>Count : {this.state.count}</h3>
      </div>
    );
  }
   timeout = {}; // thuộc tính gọi được liên phương thức ( nhiều phương thức ) : sử dụng chung
  componentDidMount() {
    // tương tụư window.onload
    // chỉ chạy 1 lần kh component load lần đầu tiên
    console.log("componentdidmount");
    // setInterval()
    this.timeout = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
      console.log("count", this.state.count);
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    /**
     *  Chạy mỗi khi setState lại ( thay đổi ). chạy sau khi component render lại ~ componentDidMount : nhưng DidMount chỉ chạy 1 lần
     *  componentDidUpdate sẽ chạy mỗi khi cập nhật state hay props
     * => Handle sau khi component gọi render
     * Tuy nhiên hạn chế setState tại đây => setState phải có lệnh if
     */

    console.log(prevProps);
    console.log(prevState);
  }

  componentWillUnmount(){
    /**
     *  Trước khi component mất khỏi giao diện => clear tất cả script chạy ngầm
     */
    clearInterval(this.timeout); // qua component khác ko chạy nữa
  }
}

/** React Class Component mới có Lifecycle
 *  React function component không có Lifecycle -> hook
 *
 * Hàm mà có sử dụng static -> không sử dụng được con trỏ this
 */

/**
 *  Lifecycle
 *    + Mouting :
 *        - Các hàm sẽ tự kích hoạt khi sử dụng 1 component. Dùng để can thiệp vào quá trình trước khi render hoặc sau khi
 *                render nhằm để xử lý state và props
 *        - Can thiệp thay đổi state  trước render ( Sử dụng getDerivedStateFromProps(newProps,currentState) )
 *        - Can thiếp thay đổi state sau render sử dụng componentDidMount()
 *        - componentDidMount chỉ chạy 1 lần suy nhất khi component load lần đầu tiên ( Thường dùng để call api)
 */
