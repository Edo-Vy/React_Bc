//rcc
import React, { Component } from 'react'
import Child from './Child';

export default class ReactLifecycle extends Component {

  // 
  constructor(props){
    super(props);
    this.state ={
      number : 1,
      like : 1
    }
    console.log('constructor')
  }
  // static không sử dụng được con trỏ this => mục đích là từ state cũ trả về state mới 
  // currentState là state trước khi thay đổi => this.state ={number : 1 }
  // hàm này tiền xử lý trước khi render => number = 2
  static getDerivedStateFromProps(newProps,currentState){
    console.log('getDerivedStateFromProps')
    // currentState.number = 2;

    // return về state mới, nếu giữ sate cũ thì return null
    // return currentState;
    return null
  }
  shouldComponentUpdate(newProps,newState){
    console.log('shouldComponentUpdate');
    return true;
  }
  render() {
    console.log('render')
    return (
      <div className='container'>
        <h3>Num:{this.state.number}</h3> 
        <button className='btn btn-success mt-3' onClick={()=>{
          this.setState({
            number : this.state.number + 1
          })
        }}>+</button>
      <h3>Like:{this.state.like}</h3> 
        <button className='btn btn-success mt-3' onClick={()=>{
          this.setState({
            like : this.state.like + 1
          })
        }}>+</button>
        <Child number={this.state.number}/>
        
      </div>
    )
  }

  componentDidMount(){ // chỉ chạy 1 lần kh component load lần đầu tiên
    console.log('componentdidmount');
    // tương tụ window.onload
  }
}


/** React Class Component mới có Lifecycle
 *  React function component không có Lifecycle -> hook
 * 
 * Hàm mà có sử dụng static -> không sử dụng được con trỏ this
 */

/**
 *  Lifecycle
 *    + Mouting : 
 *        - Các hàm sẽ tự kích hoạt khi sử dụng 1 component. Dùng để can thiệp vào quá trình trước khi render hoặc sau khi
 *                render nhằm để xử lý state và props
 *        - Can thiệp thay đổi state  trước render ( Sử dụng getDerivedStateFromProps(newProps,currentState) )
 *        - Can thiếp thay đổi state sau render sử dụng componentDidMount()
 *        - componentDidMount chỉ chạy 1 lần suy nhất khi component load lần đầu tiên ( Thường dùng để call api)
 */