//rcc
import React, { Component } from 'react'

export default class TableProduct extends Component {
  render() {
    return (
      <table className='table'>
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
          <tbody></tbody>
      </table>
    )
  }
}
