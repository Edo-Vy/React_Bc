//rcc
import React, { Component } from "react";

export default class DataBiding extends Component {
  // Thuộc tính : ko kb var, let, const . Nằm trong lớp đối tượng databiding
  product = {
    id: 1,
    name: "product 1",
    price: 1000,
    img: "https://i.pravatar.cc?u=1",
  };
  // Phương thức
  renderCardProduct = () => {
    return (
      <div className="card">
        <img src={this.product.img} alt="" />
        <div className="card-body bg-dark text-white">
          <p>name : {this.product.name}</p>
          <p>price: {this.product.price}</p>
        </div>
      </div>
    );
  };
  render() {
    const title = "Cyber";
    // ob
    const person = {
      name: "Lady Gaga",
      age: 30,
    };
    // Hàm
    const renderText = (tenLop) => {
      return `Hello ${tenLop}`;
    };
    return (
      <div className="container">
        <p id="pText">{title}</p>
        <hr />
        <div className="card w-25">
          <img src="https://i.pravatar.cc?u=1" alt="" />
          <div className="card-body">
            <p>Name : {person.name}</p>
            <p>Age: {person.age}</p>
          </div>
        </div>
        <hr />
        <h3>
          Biding gọi hàm : Chỗ hàm sẽ hiển thị những gì mà hàm đó return. Cú
          pháp {`{goiHam()}`}
        </h3>
        {renderText("Bootcamp28")}
        <hr />
        <h3>
          Binding thuộc tính tương tự binding biến và có thêm this.tenThuocTinh
        </h3>
        <div className="alert alert-primary">
          {" "}
          Product Info
          <p> id: {this.product.id}</p>
          <p> name: {this.product.name}</p>
          <img src={this.product.img} alt="" width={200} />
          <p> price: {this.product.price}</p>
        </div>
        <hr />
        <h3>Card product</h3>
        <div className="w-25">{this.renderCardProduct()}</div>
      </div>
    );
  }
}
// {} : databinding
