// rcredux
/**
 *   + Xóa export trên component
 *   + Xóa mapDispatchToProps
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormComment from './FormComment'
import TablecComment from './TablecComment'

 class DemoFormComment extends Component {
  render() {
    return (
      <div className='container'>
          <TablecComment/>
          <FormComment/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(DemoFormComment)

// bản chất redux khử hết lifecycle