//rcc
import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    srcImg: "./img/products/red-car.jpg", // xác định defaul state : state : có giá trị mặc định
  };
  // Cách 2 
  changeColor = (color) =>{
    this.setState({
        srcImg: `./img/products/${color}-car.jpg`
      });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 right">
            <img src={this.state.srcImg} className="w-100" alt="" />
          </div>
          <div className="col-6 left">
            <button
              className="btn text-white mx-2"
              style={{ background: "red" }}
              onClick={() => {
                //   Cách 1
                this.setState({
                  srcImg: "./img/products/red-car.jpg",
                });
              }}
            >
              Red
            </button>
            <button
              className="btn text-white  mx-2"
              style={{ background: "black" }}
              onClick={() => {
                //   Cách 2
                this.changeColor('black')
              }}
            >
              Black
            </button>
            <button
              className="btn text-white  mx-2"
              style={{ background: "silver" }}
              onClick={() => {
                this.setState({
                  srcImg: "./img/products/silver-car.jpg",
                });
              }}
            >
              Silver
            </button>
            <button
              className="btn text-white  mx-2"
              style={{ background: "#EEE" }}
              onClick={() => {
                this.setState({
                  srcImg: "./img/products/steel-car.jpg",
                });
              }}
            >
              Steel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
