//rcc
import React, { Component } from "react";
import FormProduct from "./FormProduct";
import TableProduct from "./TableProduct";

import axios from "axios";
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
    proEdit: {
      id: "",
      name: "",
      price: 0,
      img: "",
      proType: "",
      description: "",
    },
  };

  updatePro = (proUpdate) => {
    let pro = this.state.arrProduct.find((p) => p.id == proUpdate.id);
    if (pro) {
      pro.name = proUpdate.name;
      pro.price = proUpdate.price;
      pro.img = proUpdate.img;
      pro.proType = proUpdate.proType;
      pro.description = proUpdate.description;
    }
    // set lại state
    this.setState({
      arrProduct: this.state.arrProduct,
    });
  };
  editProduct = (prodClick) => {
    this.setState({
      proEdit: prodClick,
    });
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
  layStore() {
    if (localStorage.getItem("arrProduct")) {
      let arrProducts = JSON.parse(localStorage.getItem("arrProduct"));
      return arrProducts;
    }
    return [];
  }
  render() {
    return (
      <div className="container">
        <h3>Product Management</h3>
        <FormProduct
          addProduct={this.addPro}
          productEdit={this.state.proEdit}
          updateProduct={this.updatePro}
        />
        <TableProduct
          arrPro={this.state.arrProduct}
          arrDel={this.delPro}
          editPro={this.editProduct}
        />
      </div>
    );
  }
  //  componentDidMount() ~ window.onload()
  componentDidMount() {
    // Hàm này sẽ thực thi sau khi nội dung được render
    //-- Lấy từ localStore
    // this.setState({
    //   arrProduct: this.layStore(),
    // });

    // -- Lấy từ api
    let promise = axios({
      url: "http://svcy.myclass.vn/api/Movie/GetMovie",
      method: "GET",
    });
    // nên dùng arrfun -> this.setState (vì fun ES5 -> this này là của fun đó nên dùng ()=>{} )
    promise.then((result) => {
      this.setState({
        arrProduct: result.data,
      });
    });

    promise.catch((err) => {
      console.log(err);
    });
  }
}
