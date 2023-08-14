//rcc
import React, { Component } from 'react'



const data = [
    {id :1, name: 'Red Car', price : 1000, img :'./img/products/red-car.jpg' },
    {id :2, name: 'Black Car', price : 1000, img :'./img/products/black-car.jpg' },
    {id :3, name: 'Silver Car', price : 1000, img :'./img/products/silver-car.jpg' },
    {id :4, name: 'Steel Car', price : 1000, img :'./img/products/steel-car.jpg' }
]

export default class RenderWithMap extends Component {
   
    //===== Cách 1
    // renderProducts = () =>{
    //      // output : [<tr></tr>,<tr></tr>] -> mảng jsx
    //      const arrTrJsx = [];
    //      for ( let index = 0; index < data.length; index++){
    //          // Mỗi lần duyệt lấy ra một phần tử
    //          let prod = data[index];
    //         // Đối tượng react DOM <tr> <td></td></tr>
    //          let tr = <tr> 
    //              <td>{prod.id}</td>
    //              <td>{prod.name}</td>
    //              <td>{prod.price}</td>
    //              <td><img src={prod.img} width={50} alt="...."/></td>
    //          </tr>;

    //          // Đưa vào mảng arTrJsx
    //          arrTrJsx.push(tr);
    //      }
    //      return arrTrJsx;
    // }


    // ====== Cách 2:  Dùng map
    renderProducts = () =>{
        // output : [<tr></tr>,<tr></tr>] -> mảng jsx
        // [{},{},{}] -> [<tr></tr>,<tr></tr>]
        // const arrTrJsx = data.map((prod, index)=>{
        return data.map((prod, index)=>{
            // warning -> key : key{index} || key {prod.id} => key khác nhau là được
            return <tr key={prod.id}>   
                          <td>{prod.id}</td>
                       <td>{prod.name}</td>
                         <td>{prod.price}</td>
                          <td><img src={prod.img} width={50} alt="...."/></td>
                 </tr>;
        });

        // return arrTrJsx;
   }
    
  render() {
    return (
      <div className='container'>
          <h3>Render Table Product</h3>
          <table className='table mt-5'>
              <thead>
                  <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>IMG</th>
                  </tr>
              </thead>
              <tbody>
                  {this.renderProducts()}
              </tbody>
          </table>
      </div>
    )
  }
}
