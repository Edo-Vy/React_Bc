//rcredux
/**
 *   + Xóa export trên component
 *   + Xóa mapDispatchToProps
 */

import React, { Component } from "react";
import { connect } from "react-redux";

class FormComment extends Component {
  handleSubmit = (e) => {
    e.preventDefaul();
  };
  handleChange = (e) => {
    const { id, value } = e.target;
    // Gửi dữ liệu lên redux
    const action = {
      type: "HANDLE_CHANGE",
      payload: {
        id: id,
        value: value,
      },
    };
    this.props.dispatch(action);
  };
  render() {
    const { name, content } = this.props.commentInfo;
    return (
      <form>
        <div className="form-group">
          <p>Name</p>
          {/* phải có onChange thì mới không warning */}
          <input
            className="form-control"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <p>Content</p>
          <input
            className="form-control"
            id="content"
            value={content}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group mt-3">
          <button className="btn btn-success">Comment</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
    commentInfo: state.commentReducer.commentInfo,
});

export default connect(mapStateToProps)(FormComment);