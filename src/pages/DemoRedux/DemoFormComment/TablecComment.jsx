//rc redux
/**
 *   + Xóa export trên component
 *   + Xóa mapDispatchToProps
 */

import React, { Component } from "react";
import { connect } from "react-redux";

class TablecComment extends Component {
  render() {
    console.log(this.props);
    let { arrComment } = this.props;

    return (
      <div className="mt-3">
        <div className="img">
          <img src="https://i.pravatar.cc?u=20" alt="" height={200} />
        </div>
        {arrComment.map((comment, index) => {
          return (
            <div className="row mt-3 " key={index}>
              <div className="col-2">
                <img src={`https://i.pravatar.cc?u= ${comment.name}`} width={50} />
              </div>
              <div className="col-8 bg-secondary rounded text-white">
                <h5>{comment.name}</h5>
                <p>{comment.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrComment: state.commentReducer.arrComment,
});

export default connect(mapStateToProps)(TablecComment);
