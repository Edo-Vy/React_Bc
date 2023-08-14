//rcc

import React, { Component } from "react";

export default class ProductCard extends Component {
  render() {
    // this.props : thuộc tính có sẵn của react class component dùng để nhận giá trị từ component cha truyền vào
    //  const name = this.props;
    // const age = this.props;
    // const { name, age } = this.props; // bóc tách phẩn tử
    //  kiểu ob : khi có quá nhiều thuộc tính (privated : value)
    const { item } = this.props;
   
    /**
     *  So sánh state và props
     * - Giống nhau : Đều là thuộc tính có sẵn của react class component dùng để binding dữ liệu ra giao diện,
     * ( ko cần khai báo : extends Component)
     * - Khác nhau :
     *   + state : state có thể gán lại giá trị thông qua phương thức setState (state quản lý giá trị thay đổi trên giao diện đó)
     *   + props : không thể gán lại giá trị (readonly) dùng để nhận giá trị từ componet cha truyền vào
     */
    /**
     *  optional chaining (?) : nếu có giá trị thì làm, không có thì bỏ qua -> giúp ko báo lỗi khi ko kb
     */
    return (
      // viết giao diện tái sử dụng
      <div className="card">
        {/* <div className="col-6">
          <img src={`https://i.pravatar.cc?u=1 ${age}`} alt="..." />
          <div className="card-body">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
          </div>
        </div> */}
        <img src={`https://i.pravatar.cc?u=1 ${item?.age}`} alt="..." />
        <div className="card-body">
            {/* cách 2: bóc tách phần tử */}
          <p>Name: {item?.name}</p>
          <p>Age: {item?.age}</p>
          {/* Cách 1 */}
          <p>id: {this.props.item.id}</p>
        </div>
      </div>
    );
  }
}
