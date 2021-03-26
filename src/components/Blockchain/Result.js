import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/index';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saveAction: false,
      updateAction: false,
      deleteAction: false
    };
  }

    deleteCourse = courseId => {
    this.props.deleteThisCourse(courseId);
    this.setState({
      deleteAction: true
    })
  };

  displayResult = () => {
    return this.props.courseList.map((item, index) => {
      return (
        <tr key={index}>
          <td className="text-center">{index + 1}</td>
          <td className="text-center">{item.semester}</td>
          <td>{item.courseTitle}</td>
          <td className="text-center">{item.courseId}</td>
          <td className="text-center">{item.credits}</td>
          <td className="text-center">{item.process}</td>
          <td className="text-center">{item.examination}</td>
          <td className="text-center">{item.factor}</td>
          <td className="text-center">
            <button
              className="btn btn-primary mr-2"
              onClick={() => this.props.editThisCourse(item)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => this.deleteCourse(item.courseId)}
            >
              Delete
            </button>
          </td>
          <td className="text-center">
              {item.process * (1-item.factor) + item.examination * item.factor}
        </td>
        <td className="text-center">{item.grade}</td>
        </tr>
      );
    });
  };

  render() {
    const columnTitles = Object.keys(this.props.courseList[0]);
    columnTitles.shift();
    
    return (
      <div 
      className="card mt-3"
      // className="row-mt-15 format-table text"
      >
        <div 
        className="card-header bg-light"
        // className="col-xs-12 col-sm-12 col-md-12 col-lg-12"
        >
          <b>
            <h5 className="m-0 p-0">Result</h5>
          </b>
        </div>
        <div 
        className="card-body p-0 m-0"
        >
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                {columnTitles.map((columnTitle, index) => (
                  <th className="text-center" key={index}>
                    {columnTitle.charAt(0).toUpperCase() + columnTitle.slice(1)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{this.displayResult()}</tbody>
          </table>
          <span>
          {this.state.deleteAction === true
          ? 
          (
            <div className="alert alert-success">
              <strong>Delete This Course On Success Action!</strong>
            </div>
          ) 
          :
          ""}
        </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  courseList: state.TranscriptReducer.courseList,
  isReg: state.TranscriptReducer.isReg
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteThisCourse: (courseId) => {
      dispatch(action.deleteThisCourse(courseId));
    },
    editThisCourse: (item) => {
      dispatch(action.editThisCourse(item));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);