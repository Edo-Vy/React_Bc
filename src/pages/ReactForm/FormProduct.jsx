//rcc
import React, { Component } from "react";

export default class FormProduct extends Component {
  state = {
    id: "",
    name: "",
    price: "",
    img: "",
    proType: "mobile",
    description: "",
  };
  render() {
    return (
      <form className="card">
        <div className="card-header bg-dark text-warning">Create Product</div>
        <div className="card-body row">
          <div className="form-group">
            <div className="col-6">
              <div className="form-group">
                <p>Id</p>
                <input className="form-control" id="id" name="id" onInput={(event)=>{
                    // evnent(e) : sự kiện sử lý thao tác trả ra  className="form-control" id="id" name="id" thông qua target
                    console.log(event.target);
                }} />
              </div>
              <div className="form-group">
                <p>Name</p>
                <input className="form-control" id="name" name="name" />
              </div>
              <div className="form-group">
                <p>Price</p>
                <input className="form-control" id="price" name="price" />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>Img</p>
                <input className="form-control" id="img" name="img" />
              </div>
              <div className="form-group">
                <p>Product Type</p>
                <select id="proType" name="proType" className="form-control">
                  <option value="mobile">Mobile</option>
                  <option value="laptop">Laptop</option>
                  <option value="taplet">Taplet</option>
                </select>
              </div>
              <div className="form-group">
                <p>Description</p>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-success mx-3">Create</button>
          <button type="button" className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    );
  }
}
