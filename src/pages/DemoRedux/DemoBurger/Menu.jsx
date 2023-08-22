//rcredux
import React, { Component } from "react";
import { connect } from "react-redux";

class Menu extends Component {
  renderMenu = () => {
    let { burger } = this.props;
    return burger.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>
            <buton
              className="btn btn-primary mx-2"
              onClick={() => {
                const action = {
                  type: "CHANGE_QUANTITY",
                  payload: {
                    id: item.id,
                    quantity: 1,
                  },
                };
                // Gửi dữ liệu lên redux
                this.props.dispatch(action);
              }}
            >
              +
            </buton>
            {item.quantity} {/* <p>1</p> */}
            <button
              className="btn btn-primary  mx-2"
              onClick={() => {
                const action = {
                  type: "CHANGE_QUANTITY",
                  payload: {
                    id: item.id,
                    quantity: -1,
                  },
                };
                // Gửi dữ liệu lên redux
                this.props.dispatch(action);
              }}
            >
              -
            </button>
          </td>
          <td>{item.price}</td>
        </tr>
      );
    });
  };
  tinhTongTien = () => {
    const { burger } = this.props;
    return burger.reduce((total, item, index) => {
        // Mỗi lần chạy sẽ lấy giá của cheese + salad + beef
      return (total += item.quantity * item.price);
    }, 0);
  };
  render() {
    let { burger } = this.props;
    return (
      <div>
        <h3>Menu</h3>
        <table className="table">
          <thead>
            <tr>
              <td>Topping</td>
              <td>Quantity</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {this.renderMenu()}
            {/* <tr>
              <td>Salad</td>
              <td>
                <buton className="btn btn-primary mx-2">+</buton> 1
               
                <button className="btn btn-primary  mx-2">-</button>
              </td>
              <td>10</td>
            </tr>
            <tr>
              <td>Cheese</td>
              <td>
                <buton className="btn btn-primary mx-2">+</buton> 1
             
                <button className="btn btn-primary  mx-2">-</button>
              </td>
              <td>10</td>
            </tr>
            <tr>
              <td>Beef</td>
              <td>
                <buton className="btn btn-primary mx-2">+</buton> 1
                
                <button className="btn btn-primary mx-2">-</button>
              </td>
              <td>10</td>
            </tr> */}
            <tr>
              <td colSpan={2}> </td>
              <td>Total :{this.tinhTongTien()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  burger: state.burgerReducer.burger,
});

export default connect(mapStateToProps)(Menu);
