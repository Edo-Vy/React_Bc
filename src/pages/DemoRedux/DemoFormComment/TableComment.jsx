//rc redux
/**
 *   + Xóa export trên component
 *   + Xóa mapDispatchToProps
 */

import React, { Component } from "react";
import { connect } from "react-redux";

class TableComment extends Component {
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
                <img
                  src={`https://i.pravatar.cc?u= ${comment.name}`}
                  width={50}
                />
              </div>
              <div className="col-8 bg-secondary rounded text-white">
                <h5>{comment.name}</h5>
                <p>{comment.content}</p>
                <div style={{textAlign:'right'}}>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      // Tạo ra action Xóa
                      // B1 :
                      const action = {
                        type: "DELETE_COMMENT",
                        payload: index,
                      };
                      // B2 :
                      this.props.dispatch(action);
                    }}
                  >
                    Xóa
                  </button>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => {
                      // Tạo ra action Xóa
                      // B1 :
                      const action = {
                        type: "EDIT_COMMENT",
                        payload: index,
                      };
                      // B2 :
                      this.props.dispatch(action);
                    }}
                  >
                    Edit
                  </button>
                </div>
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

export default connect(mapStateToProps)(TableComment);
