//rcc
import React, { Component, PureComponent } from "react";

// export default class Child extends Component

/**
 *  PureComponent là component không có lifecycle shouldComponentUpdate. Tuy nhiên ở PureComponent
 * đã được hỗ trợ việc xử lý render khi props thay đổi và không render khi props không thay đổi
 * === Lưu ý :
 * So sánh props ở đây chỉ là dạng shallow compare - nhận biết được (primitive value): number, string, boolean,
 * undefined...
 * Đối với reference value thì khi cập nhật state  ở component cha vẫn phái sử dụng {...spread operator}
 *  */
export default class Child extends PureComponent { 
  //
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor child");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps child");
    return null;
  }
  shouldComponentUpdate(newProps, newState) {
    // newProps : là props mới trước khi render
    // this.props : là props hiện tại

    if (this.props.number !== newProps.number) {

      console.log("shouldComponentUpdate child");
      return true;
    }
    return false; // ko cần render lại => tối ưu peformance ( ko có sự thay đổi ở giao diện)
  }
  render() {
    console.log("render child");
    return (
      <div className="p-5 display-4 bg-dark text-white">
        {/* <h2> Child Component {this.props.number}</h2> */}
        <h2> Child Component {this.props.obNumber.number}</h2>

      </div>
    );
  }

  componentDidMount() {
    console.log("componentdidmount child");
  }
  componentDidUpdate(prevProps,prevState,){

  }
}
