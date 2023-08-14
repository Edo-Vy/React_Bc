//rcc
import React, { Component } from "react";

export default class ProItem extends Component {
  render() {
    let { item, xemChiTietPro } = this.props;
    return (
      <div>
        <div className="card">
          <img src={item.hinhAnh} alt="..." height={390} />
          <div className="card-body">
            <h3>{item.tenSP}</h3>
            <p>{item.giaBan}</p>
            <div className="card-des">
              <button
                className="btn bg-dark text-white"
                onClick={() => {
                  xemChiTietPro(item);
                }}
              >
                Xem Chi Tiết
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
