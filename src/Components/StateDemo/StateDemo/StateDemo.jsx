//rcc
import React, { Component } from "react";
import BaiTapChonXe from "../BaiTapChonXe/BaiTapChonXe";
import BaiTapTangGiamFontSize from "../BaiTapChonXe/BaiTapTangGiamFontSize";

export default class StateDemo extends Component {
  // state là thuộc tính có sẵn của react class component, dùng để chứa các giá trị thay đổi trên giao diện, giá trị nào liên quan đến sự thay đổi (click đăng nhập) của giao diện sẽ đem vào state
  // Khi state thay đổi thì giao diện sẽ tự render lại
  state = {
    login: false,
  };
  // Thuộc tính
  // login = false; // false : chưa đăng nhập, true : đăng nhập
  renderLogin = () => {
    if (this.state.login) {
      return (
        <div>
          <span className="text-light">Hello CyberSot</span>
          <button className="btn btn-danger ml-2" onClick={()=>{
            this.setState({login: false})
          }}>Đăng Xuất</button>
        </div>
      );
    }
    return (
      <div>
        <button
          className="btn btn-outline-success"
          onClick={() => {
            // Gọi hàm để đăng nhập
            this.handleLogin();
          }}
        >
          Đăng Nhập
        </button>
      </div>
    );
  };
  // ----C1: Dùng async ...await
  // handleLogin = async () => {
  //   // this.state.login = true; // Không được thay đổi state trực tiếp mà phải thông qua phương thức setState
  //   // console.log(this.state.login)

  //   let newState = {
  //     login: true,
  //   };
  //   /*
  //     + this.setState là phương thức có sẵn cuả react class component,
  //     + làm thay đổi giá trị state cũ đồng thời reder lại giao diện
  //     + setState là phương thức bất đồng bộ
  //    */
  //    await this.setState(newState);
  //   console.log(this.state); // vấn là false : chạy trước khi render nữa => async ...await( đồng bồ lại những bất đồng bộ , ES7 ) đợi render xong ms clg
  // };

  // ----C2: Dùng callback : ít ảnh hưởng đến per
  handleLogin = () => {
    // this.state.login = true; // Không được thay đổi state trực tiếp mà phải thông qua phương thức setState
    // console.log(this.state.login)

    let newState = {
      login: true,
    };
    /* 
      + this.setState là phương thức có sẵn cuae react class component,
      + làm thay đổi giá trị state cũ đồng thời reder lại giao diện
      + setState là phương thức bất đồng bộ
     */
    // this.setState({login : true }) : ko tạo biến mới newState
    this.setState(newState, () => {
      // callback funtion () =>{}
      // Hàm này sẽ tự gọi sau khi setState và render xong
      console.log(this.state); // vấn là false : chạy trước khi render nữa => async ...await( đồng bồ lại những bất đồng bộ , ES7 ) đợi render xong ms clg
    });
  };
  render() {
    return (
      <>
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#" aria-current="page">
                  Home <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <div className="d-flex my-2 my-lg-0 align-items-center">
              {/* {toán tử 3 ngôi === true (?)-> đăng nhập esle (:) -> chưa đăng nhập } */}
              {/* {this.login ? <span className="text-light">Hello CyberSot</span> :  <button className="btn btn-outline-success">Đăng Nhập</button> } */}
              {this.renderLogin()}
            </div>
          </div>
        </nav>
        <hr/>
        <h3 className="container">Bài Tập Chọn Xe</h3>
        <BaiTapChonXe></BaiTapChonXe>
        <hr/>
        <BaiTapTangGiamFontSize></BaiTapTangGiamFontSize>
      </div>
      </>
    );
  }
}

//<> </> : thẻ vô hình, giúp bao lại nội dung, ko hiện lên giao diện