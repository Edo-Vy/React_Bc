//rcc
import React, { Component } from 'react'

export default class  extends Component {

  render() {
    const {item} = this.props;

    return (
      <div className='card my-3'>
          <img src={item.image} alt=''/>
          <div className='card-body'>
              <h3 style={{height :75}}>{item.name}</h3>
              <p>{item.price}$</p>
              <div className='card-des'>
                  <button className='btn bg-dark text-white'>Add to carts</button>
              </div>
          </div>
      </div>
    )
  }
}
