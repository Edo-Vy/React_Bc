//rcredux
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Burger extends Component {

    renderTopping = (id) =>{

      let {burger} = this.props;
      let cheese = burger.find(item => item.id === id);
    // Số lượng
    let {quantity} = cheese;
    const arrDivJSX = [];
    for (let i = 0; i < quantity; i++){
        const divTopping = <div className={id} key={i}></div>;
        // Mỗi lần duyệt tạo ra 1 thẻ Div đưa vào arr
        arrDivJSX.push(divTopping);
    }
    return arrDivJSX;
    }

  render() {
    return (
      <div>
          <div className='breadTop'></div>
          {/* <div className='cheese'></div> */}
          {this.renderTopping('cheese')}
          {this.renderTopping('beef')}
          {this.renderTopping('salad')}
          {/* <div className='beef'></div> */}
          {/* <div className='salad'></div> */}
          <div className='breadBottom'></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    burger : state.burgerReducer.burger
})


export default connect(mapStateToProps)(Burger)