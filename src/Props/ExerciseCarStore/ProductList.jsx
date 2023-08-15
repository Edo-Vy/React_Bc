//rcc
import React, { Component } from 'react'
import ItemCar from './ItemCar';

export default class ProductList extends Component {
 
  renderProductItem = ()=>{
    let {prod,viewDetailModalItem} = this.props;

    return prod.map((item, index)=>{

      return <div className='col-3' key={index}>
        <ItemCar productItem ={item} viewItem = {viewDetailModalItem}></ItemCar>
      </div>
    })
  }
  
  
  render() {
    return (
      <div>
        <h3>Products List</h3>
        <div className='row'>
          {this.renderProductItem()}
        </div>
      </div>
    )
  }
}
