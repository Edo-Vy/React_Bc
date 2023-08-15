//rcc

import React, { Component } from "react";
import Modal from "./Modal";
import ProductList from "./ProductList";

const data = [
  {
    id: 1,
    name: "black car",
    img: "./img/products/black-car.jpg",
    price: 1000,
  },
  { id: 2, name: "red car", img: "./img/products/red-car.jpg", price: 2000 },
  {
    id: 3,
    name: "silver car",
    img: "./img/products/silver-car.jpg",
    price: 3000,
  },
  {
    id: 4,
    name: "Steel car",
    img: "./img/products/steel-car.jpg",
    price: 4000,
  },
];
export default class ExerciseCarStore extends Component {

    state = {
        proModal :{
            id: 3,
            name: "silver car",
            img: "./img/products/silver-car.jpg",
            price: 3000,
          }
    }
    // state đặt ở đâu thì setState sẽ đặt tại component đó

    viewDtailModal = (newProModal) =>{
        // Lấy dữ liệu pro mà người dùng click  thay thế cho state hiện tại
        this.setState({
            proModal : newProModal
        })
    }
  render() {
    return (
      <div className="container">
        <Modal itemModal ={this.state.proModal}></Modal>
        {/* props : có thể nhận đk component, ob, function, arr,.... */}
        <ProductList viewDetailModalItem ={this.viewDtailModal} prod ={data}></ProductList>
      </div>
    );
  }
}


/**
 *  Bài toán : 4 component thì đặt state ở component nào ?
 * ----> Thỏa 2 yếu tố 
 */