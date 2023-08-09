import React, { Component } from 'react'
import BTBody from './BTBody'
import BTFooter from './BTFooter'
import BTHeader from './BTHeader'

export default class BaiTapLayout extends Component {
  render() {
    return (
      <div>
        <BTHeader></BTHeader>
        <BTBody></BTBody>
        <BTFooter></BTFooter>
      </div>
    )
  }
}
