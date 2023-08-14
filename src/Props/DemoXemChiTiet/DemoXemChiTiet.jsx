//rcc
import React, { Component } from "react";
import ProItem from "./ProItem";

const data = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];
export default class DemoXemChiTiet extends Component {

   state = {
    // Cho giá trị defaul cho state
    proDetail : {
        maSP: 3,
        tenSP: "Iphone XS Max",
        manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
        heDieuHanh: "iOS 12",
        cameraSau: "Chính 12 MP & Phụ 12 MP",
        cameraTruoc: "7 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 27000000,
        hinhAnh: "./img/applephone.jpg",
      }
   } 
  renderPro = () => {
    return data.map((pro,index) => {
      return (
        <div className="col-4" key={index}>
          <ProItem item = {pro}
        //   {this.xemChiTiet -> ko có dấu () : vì khi biên dịch qua gọi hàm thì thực thi luôn rồi, khi chưa click}
          xemChiTietPro = {this.xemChiTiet}></ProItem>
        </div>
      );
    });
  };
  // callbackfun
  xemChiTiet =(proClick) =>{
        // setState thay thế proDetail = object sản phẩm được click

        this.setState({
            proDetail : proClick
        })
  }
  render() {
    // Bóc tách phần tử -> gọn
    let {maSP,tenSP,manHinh,heDieuHanh,cameraSau,cameraTruoc,ram,rom,giaBan,hinhAnh} = this.state.proDetail;
    return (
      <div className="container mt-3">
        <h3>Danh Sách Sản Phẩm</h3>
        <div className="row">
            {this.renderPro()}
        </div>
        <div className="detail-product mt-4">
          <div className="row">
            <div className="col-3">
              <h3 className="text-center">{tenSP}</h3>
              {/* <img src={this.state.proDetail.hinhAnh} alt="..." className="w-100" /> <= bóc tách phần tử*/}
              <img src={hinhAnh} alt="..." className="w-100" />
            </div>
            <div className="col-9">
              <h3>Thông Tin Chi Tiết</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn Hình</td>
                    <td>{manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ Điều Hành</td>
                    <td>{heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera Trước</td>
                    <td>{cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera Sau</td>
                    <td>{cameraSau}</td>
                  </tr>
                  <tr>
                    <td>Ram</td>
                    <td>{ram}</td>
                  </tr>
                  <tr>
                    <td>Rom</td>
                    <td>{rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
