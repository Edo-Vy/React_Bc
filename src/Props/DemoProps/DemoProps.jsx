// những gì khác nhau -> sd prop : ( hình ảnh, nội dung) : chỉ sử dụng lại những layouts giống nhau nhưng sẽ khác nhau về nội dung

//rcc
import React, { Component } from "react";
import ProductCard from "./ProductCard";

const data = [
  { id: 1, name: "Sang", age: 15 },
  { id: 2, name: "Quân", age: 19 },
  { id: 3, name: "Hậu", age: 20 },
];
export default class DemoProps extends Component {
  renderPer = () => {
    return data.map((per, index) => {
      return (
        <div className="col-4" key={index}>
          <ProductCard item ={per}></ProductCard>
        </div>
      );
    });
  };
  render() {
    let person = {
      id: 1,
      name: "Minh",
      age: 18,
    };
    let person2 = {
      id: 2,
      name: "Minh Minh",
      age: 19,
    };
    return (
      <div className="container">
        {/* ProductCard name='' age =""  => phải giống nhau ( -> báo lỗi)*/}
        <div className="w-25">
          {/* <ProductCard name='Quân' age ="18"></ProductCard> */}
          {/* có thể là ob */}
          {/* <ProductCard item={person}></ProductCard> */}
        </div>
        <div className="w-25">
          {/* <ProductCard  name='Minh' age ="20"></ProductCard> */}
          {/* <ProductCard item={person2}></ProductCard> */}
        </div>
        <div className="row">{this.renderPer()}</div>
      </div>
    );
  }
}
