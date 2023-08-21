//rcredux
/**
 *   + Xóa export trên component
 *   + Xóa mapDispatchToProps
 */
import React, { Component } from "react";
import { connect } from "react-redux";

class DemoChonXe extends Component {
  change_color = (color) => {
    // B1 : Tạo ra action chứa dữ liệu thay đổi state
    const action = {
      type: "CHANGE_COLOR",
      payload: `./img/products/${color}-car.jpg`,
    };
    // B2 : DÙng this.props.dispatch để đưa action lên store
    this.props.dispatch(action);
  };
  render() {
    console.log(this.props);
    let { imgCar } = this.props;
    return (
      <div className="container">
        <h3> Demo Chọn Xe</h3>
        <div className="row">
          <div className="col-6">
            <img src={imgCar} alt="..." className="w-100" />
          </div>
          <div className="col-6 d-flex">
            <div className="mx-2">
              <button
                className="btn btn-danger"
                onClick={() => {
                  // B1 : Tạo ra action chứa dữ liệu thay đổi state
                  const action = {
                    type: "CHANGE_COLOR",
                    payload: "./img/products/red-car.jpg",
                  };
                  // B2 : DÙng this.props.dispatch để đưa action lên store
                  this.props.dispatch(action);
                }}
              >
                Red
              </button>
            </div>
            <div className="mx-2">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  this.change_color("silver");
                }}
              >
                Sliver
              </button>
            </div>
            <div className="mx-2">
              <button
                className="btn btn-dark"
                onClick={() => {
                  this.change_color("black");
                }}
              >
                Black
              </button>
            </div>
            <div className="mx-2">
              <button
                className="btn btn-warning"
                onClick={() => {
                  this.change_color("steel");
                }}
              >
                Steel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// Nơi lấy state redux biến thành props component
const mapStateToProps = (state) => ({
  imgCar: state.imgCar,
});

export default connect(mapStateToProps)(DemoChonXe);
