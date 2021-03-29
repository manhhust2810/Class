import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/index';

class Result extends Component {
  constructor(props) {
    super(props);
  }

  deleteList = courseId => {
    this.props.deleteThisCourse(courseId);
    this.props.deleteCourseOnSuccess(courseId);
    this.props.updateCourseOnFailure();
    this.props.saveCourseOnFailure();
  };

  contentAlert = () => {
    switch (true) {
      case this.props.saveAction:
        return 'Save';
      case this.props.deleteAction:
        return 'Delete';
      case this.props.updateAction:
        return 'Update';
      default:
        return;
    }
  };

  displayAlert = () => {
    return (
      <span className="alert alert-success foo">
        <strong>
          {this.contentAlert()} {this.props.courseChange} On Success!
        </strong>
      </span>
    );
  };

  render() {
    const columnTitles = [
      'STT',
      'Semester',
      'Course Title',
      'Course Id',
      'Credits',
      'Process',
      'Examination',
      'Factor',
      'Action',
      'Point',
      'Grade'
    ];

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
        <div className="card-body p-0 m-0">
          <table className="table table-bordered table-hover">
            <thead>
              <tr style={{ backgroundColor: '#8C1515', color: '#FFFFFF' }}>
                {columnTitles.map((columnTitle, index) => (
                  <th className="text-center" key={index}>
                    {columnTitle}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {this.props.courseList.length !== 0 ? (
                this.props.courseList.map((item, index) => (
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
                        onClick={() => this.deleteList(item.courseId)}
                      >
                        Delete
                      </button>
                    </td>
                    <td className="text-center">
                      {item.process * (1 - item.factor) +
                        item.examination * item.factor}
                    </td>
                    <td className="text-center">{item.grade}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td 
                  colspan="11" 
                  className="text-center"
                  style={{color: "#8C1515"}}>
                    <strong>Data not found</strong>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <span>{this.props.takeAction ? this.displayAlert() : ''}</span>
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
    deleteThisCourse: courseId => {
      dispatch(action.deleteThisCourse(courseId));
    },
    editThisCourse: item => {
      dispatch(action.editThisCourse(item));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
