//rcc
import React, { Component } from "react";
import FormProduct from "./FormProduct";
import TableProduct from "./TableProduct";

export default class ReactForm extends Component {
  state = {
    arrProduct: [
      {
        id: 1,
        name: "product 1",
        price: 1000,
        img: "https://picsum.photos/50/50",
        proType: "mobile",
        description: "product 1",
      },
      {
        id: 2,
        name: "product 2",
        price: 1000,
        img: "https://picsum.photos/50/50",
        proType: "laptop",
        description: "product 2",
      },
    ],
  };

  addPro = async (newPro) => {
    console.log(newPro);

    // sau khi bấm nút submit thêm vào mảng
    // this.state.arrProduct.push(newPro); -> khi thêm vào mảng vẫn là địa chỉ state cũ ko thay đổi => toán tử ...oper
    let arrProUpdate = [...this.state.arrProduct, { ...newPro }]; // cái mới thay đổi, cũng ko làm ảnh hửng cái cũ, chép sang vị trí khác
    // thay đổi -> setState
    await this.setState({
      // arrProduct : this.state.arrProduct
      arrProduct: arrProUpdate,
    });
    this.luuStore(); // lưu rồi mới -> setState -> callbackfu or asyn...await
  };

  delPro = (idDel) => {
    console.log(idDel);
    // filter
    let arrProUpdate = this.state.arrProduct.filter((pro) => pro.id !== idDel);
    // this.setState : lm thay đổi giao diện

    this.setState(
      {
        arrProduct: arrProUpdate,
      },
      () => {
        this.luuStore();
      }
    );
    // this.luuStore(); // lưu rồi mới -> setState -> callbackfu or asyn...await
  };
  // lưu local
  luuStore() {
    let value = JSON.stringify(this.state.arrProduct);
    localStorage.setItem("arrProduct", value);
  }
  // Lấy Local
  layStore(){

    if(localStorage.getItem('arrProduct')){

      let arrProducts = JSON.parse(localStorage.getItem('arrProduct'));
      return arrProducts;
    }
    return [];
  }
  render() {
    return (
      <div className="container">
        <h3>Product Management</h3>
        <FormProduct addProduct={this.addPro} />
        <TableProduct arrPro={this.state.arrProduct} arrDel={this.delPro} />
      </div>
    );
  }
}
