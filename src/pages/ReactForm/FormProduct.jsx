//rcc
import React, { Component } from "react";

export default class FormProduct extends Component {
  state = {
    // id: "",
    // name: "",
    // price: "",
    // img: "",
    // proType: "mobile",
    // description: "",
    // ---validation
    prodInfo: {
      id: "",
      name: "",
      price: "",
      img: "",
      proType: "mobile",
      description: "",
    },
    error: {
      id: "",
      name: "",
      price: "",
      img: "",
      proType: "",
      description: "",
    },
  };

  handleChange = (event) => {
    let { value, id } = event.target; // bóc tách phần tử
    // debugger
    /**
        let { value, id } = event.target;
        this.setState({
             [id]: value,
           },() => {
               console.log(this.state);
         });
    */
    // Xử lý proInfo
    let newValue = this.state.prodInfo;
    //get attribute
    let dataType = event.target.getAttribute("data-type");

    newValue[id] = value;

    // Xử lý error
    let newError = this.state.error;
    let messErr = "";
    if (value.trim() === "") {
      messErr = id + " không được bỏ trống!";
    } else {
      if (dataType == "number") {
        let regexNumber = /^\d+$/;
        if (!regexNumber.test(value)) {
          messErr = id + " phải là số !";
        }
      }
    }
    newError[id] = messErr;

    //setState
    this.setState(
      {
        prodInfo: newValue,
        error: newError,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  handleSubmit = (event) => {
    // Chặn sự kiện reload của browser (mỗi khi click hay enter)
    event.preventDefault();
    // click || enter lấy dữ liệu qua state
    // console.log(this.state);

    // Khi người dùng bấm nút submit => gửi dữ liệu người dùng nhập từ state => ra hàm addProduct
    this.props.addProduct(this.state.prodInfo);
  };

  // Can thiệp vào quá trình render props của Updating
  // Khi bấm nút Edit không dữ liệu từ props để render ra giao diện nữa, mà sẽ lấy dữ liệu từ state nhưng sẽ can thiệp vào trước khi render
  /**
   *  Khi người dùng chỉnh sửa
   * this.props.productEdit => productEdit sẽ gán cho state -> sau đó giao diện lấy ra từ state
   */

  static getDerivedStateFromProps(newProps, currentState) {
    // Khi bấm nút chỉnh sửa (edit)
    /**  v-17 || onChange
    *  if (newProps.productEdit.id !== currentState.prodInfo.id) {
            currentState.prodInfo = newProps.productEdit;

            return { ...currentState };
         }
         return null; // giữ lại state cũ
    */
    //  v-18 || onInput
    currentState.prodInfo = newProps.productEdit;
    return { ...currentState }; // hàm này sẽ tạo ra this.state mới
  }
  /**
   * Có 2 cách
   * - Cách 1 : Dùng getDerivedStateFromProps
   * - Cách 2 : Dùng  componentWillReceiveProps - của phiên bản react-dom 16 ( dùng lifecycle cũ)
   */
  // componentWillReceiveProps(newProps){
  //   // Chỉ chạy khi props thay đổi
  //   this.setState({
  //     prodInfo: newProps.productEdit
  //   })
  // }
  render() {
    // let { productEdit } = this.props; // bị đè Updating
    // let { productEdit } = this.state.prodInfo;
    let { id, name, img, price, proType, description } = this.state.prodInfo;

    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark text-warning">Create Product</div>
        <div className="card-body row">
          <div className="col-6">
            <div className="form-group">
              <p>Id</p>
              <input
                // value={productEdit.id}
                value={id}
                className="form-control"
                id="id"
                name="id"
                onInput={
                  this.handleChange
                  /**
                   evnent(e) : sự kiện sử lý thao tác trả ra  className="form-control" id="id" name="id" thông qua target
                   console.log(event.target);
                   let value = event.target.value; // khi nhập liệu lấy ra value của thẻ
                   let {value} = event.target; // bóc tách phần tử
                   this.setState({
                       id: value
                        },()=>{
                         console.log(this.state)
                    })
                   }} />
               */
                  /**
                  (event) => {let { value, id } = event.target; // bóc tách phần tử
                  this.setState({
                        [id]: value,
                      },() => {
                         console.log(this.state);
                       }
                     );
                   }
                */
                }
              />
              <p className="text-danger">{this.state.error.id}</p>
            </div>
            <div className="form-group">
              <p>Name</p>
              <input
                // value={productEdit.name}
                value={name}
                className="form-control"
                id="name"
                name="name"
                onInput={
                  this.handleChange
                  /**
                   evnent(e) : sự kiện sử lý thao tác trả ra  className="form-control" id="id" name="id" thông qua target
                   console.log(event.target);
                   let value = event.target.value; // khi nhập liệu lấy ra value của thẻ
                   let {value} = event.target; // bóc tách phần tử
                   this.setState({
                       name: value
                        },()=>{
                         console.log(this.state)
                    })
                   }} />
               */
                  /**
                  (event) => {let { value, id } = event.target; // bóc tách phần tử
                  this.setState({
                        [id]: value,
                      },() => {
                         console.log(this.state);
                       }
                     );
                   }
                */
                }
              />
              <p className="text-danger">{this.state.error.name}</p>
            </div>
            <div className="form-group">
              <p>Price</p>
              {/* *  attribute : là thuộc tính có thể thêm trên thẻ, mà ko phải bản chất HTML có, mặc định HTML vẫn được,
                      nhưng React sẽ cảnh báo lỗi. Để thêm thuộc tính attribute người ta sẽ thêm thông qua thuộc tính data-...=""(data-type='number') 
                  *  property : thuộc tính HTML có : value, id, name,.... khi ko khai báo nhưng DOM tới vẫn có thuộc tính đó
               */}
              <input
                // value={productEdit.price}
                value={price}
                data-type="number"
                className="form-control"
                id="price"
                name="price"
                onInput={this.handleChange}
              />
              <p className="text-danger">{this.state.error.price}</p>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>Img</p>
              <input
                // value={productEdit.img}
                value={img}
                className="form-control"
                id="img"
                name="img"
                onInput={this.handleChange}
              />
              <p className="text-danger">{this.state.error.img}</p>
            </div>
            <div className="form-group">
              <p>Product Type</p>
              <select
                // value={productEdit.proType}
                value={proType}
                id="proType"
                name="proType"
                className="form-control"
                onInput={this.handleChange}
              >
                <option value="mobile">Mobile</option>
                <option value="laptop">Laptop</option>
                <option value="taplet">Taplet</option>
              </select>
            </div>
            <div className="form-group" onInput={this.handleChange}>
              <p>Description</p>
              <textarea
                // value={productEdit.description}
                value={description}
                className="form-control"
                id="description"
                name="description"
              />
              <p className="text-danger">{this.state.error.proType}</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-success mx-3">Create</button>
          <button type="button" className="btn btn-primary" onClick={()=>{
            // thêm , sửa nhớ tham chiếu vùng nhớ (...clone ra)
            this.props.updateProduct({...this.state.prodInfo})
          }}>
            Update
          </button>
        </div>
      </form>
    );
  }
}
