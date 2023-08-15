//rcc
import React, { Component } from 'react'

export default class ItemCar extends Component {
  render() {
    // this.props là thuộc tính nên có thể gọi được tất cả phương thức
    let {productItem,viewItem} = this.props;
    return (
      <div>
        <div className='card'>
          <img src={productItem.img} alt='...' className='w-100'/>
          <div className='card-body'>
            <h3>{productItem.name}</h3>
            <p>{productItem.price}$</p>
            <div className='card-des'>
              <button className='btn btn-success' onClick={()=>{
                viewItem(productItem)
              }}data-bs-toggle="modal"
              data-bs-target="#modalId">Xem Chi Tiết</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
