//rcc
import React, { Component } from "react";

export default class TableProduct extends Component {
  render() {
    let { arrPro, arrDel } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Img</th>
            <th>Name</th>
            <th>Price</th>
            <th>Type</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody> 
          {arrPro.map((pro, index) => {
            return (
              <tr key={index}>
                <td>{pro.id}</td>
                <td>
                  <img src={pro.img} alt="" width={50} />
                </td>
                <td>{pro.name}</td>
                <td>{pro.price}</td>
                <td>{pro.proType}</td>
                <td>{pro.description}</td>
                <td>
                  <button className="btn btn-danger mx-2" onClick={()=>{
                     arrDel(pro.id)
                  }}>Del</button>
                  <button className="btn btn-primary mx-2">Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
