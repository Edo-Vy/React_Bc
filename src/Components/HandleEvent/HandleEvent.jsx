//rcc
import React, { Component } from "react";

export default class HandleEvent extends Component {
  // Phướng thức
  handleClick = (e) => {
    alert("Hello Cyber");
  };

  showMess = (name) =>{

    alert (`Hello ${name}`);
  }
  render() {
    return (
      <div className="container mt-2">
        {/* Cách 1: thường được sử dụng, sinh ra để sd cho nó thôi */}
        <button
          id="btnClick"
          onClick={(e) => {
            alert("Hello Cyber");
          }}
        >
          Click Me
        </button>
        {/* Cách 2 : handleClick không có dấu gọi hàm() vì gọi hàm khi us chưa click, nó biên dịch qua đã gọi databinding và gọi luôn*/}
        <button className="btn btn-primary ml-5" onClick={this.handleClick}>
          Click 2
        </button>
        <hr/>
        {/* Tối ưu per hơn : nên dùng */}
        <h3>Handle click params</h3>
        <button className="btn btn-success" id="click3" onClick={(e)=>{
            // gọi các hàm khác thực thi khi click
            this.showMess('Cyber');
        }}>Show Mess</button>
        {/* Cách 3: bind : gọi lại hàm > function */}
         <button className="btn btn-danger ml-5" onClick={this.showMess.bind(this,"Hello Danger")}>
          Click 3
        </button>
      </div>
    );
  }
}
