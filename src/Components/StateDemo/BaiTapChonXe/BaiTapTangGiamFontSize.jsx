//rcc
import React, { Component } from "react";

export default class BaiTapTangGiamFontSize extends Component {

    state = {

        fSize : 16 // default 16
    }
  render() {
    return (
      <div className="container">
        <h3>BaiTapTangGiamFontSize</h3>
        <p style={{fontSize : this.state.fSize + 'px'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla
          consectetur dicta aliquid provident eligendi non dolore, omnis
          assumenda inventore delectus suscipit illum voluptate quae mollitia
          commodi tempora. Officia, accusamus.
        </p>
        <button className="btn btn-primary mx-2" onClick={() =>{
            this.setState({
                fSize : this.state.fSize + 2
            })
        }}>+</button>
        <button className="btn btn-success mx-2"  onClick={()=>{
            this.setState({
                fSize : this.state.fSize -2
            })
        }}>-</button>
      </div>
    );
  }
}
