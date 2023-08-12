//rcc
import React, { Component } from "react";
import style from './StyleWithJSX.module.scss'; // Cách 2: khi nào cần truyền động classs
// import "../../index.css"; // cách này hay dùng : tổng thể cho giao diện trước 
export default class StyleWithJSX extends Component {
  render() {
    return (
      <div className="container">
        <h3>Style With JSX</h3>
        <p className="text-blue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia
          ut, atque distinctio sit, quaerat explicabo sunt similique pariatur
          dolores, deserunt aperiam natus. Error veritatis doloribus quis
          delectus explicabo esse!
        </p>
        {/* Cách 2 */}
        <h3 className={`p-2 bg-dark ${style['text-blue']}`}>Text Binding</h3>
        <hr/>
        {/* Cách 3: Cần truyền động cho thuộc tính cho css */}
        <div style={{color:'orange', background:`url(https://picsum.photos/200/200)`, height:300}}>Helo Cyber</div>
      </div>
    );
  }
}
