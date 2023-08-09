import React, { Component } from 'react'
import BTBanner from './BTBanner'
import BTItem from './BTItem'

export default class BTBody extends Component {
  render() {
    return (
      <div>
          <BTBanner></BTBanner>
          <BTItem></BTItem>
      </div>
    )
  }
}
