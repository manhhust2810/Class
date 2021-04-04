import React, { Component, createElement } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/index';
import { 
  FaSortNumericDown, 
  FaSortAlphaDown,
  FaSort,
  FaSortDown,
  FaSortUp,
  BsExclamationTriangleFill
} from "react-icons/fa";
import DataNotFound from "./DataNotFound";
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
      <span className="alert alert-success foo"
      >
        <strong>
          {this.contentAlert()} {this.props.courseChange} On Success!
        </strong>
      </span>
    );
  };

  renderIcons = (columnTitle) => {
    switch(columnTitle) {
      case "STT":
        return;
      case "Semester":
      case "Course Id":
      case "Credits":
      case "Process":
      case "Exam":
      case "Point":
      case "Factor":
        return <FaSort 
        className=""
        onClick={this.props.onSortChange}
        />;
      case "Course Title":
      case "Grade":
        return <FaSort
        className=""
        onClick={this.props.onSortChange}
        />;
    }
  }

  sortAlpha = (post, name) => {
    return post.sort((a, b) => {
      if (a[name] < b[name]) {
        return -1;
      }
      if (a[name] > b[name]) {
        return 1;
      }
      return 0;
    });
  }

  render() {
    const { onSortChange } = this.props;
    const sortTypes = {
      up: {
          class: 'sort-up',
          fn: (a, b) => a.credits - b.credits
      },
      down: {
          class: 'sort-down',
          fn: (a, b) => b.credits - a.credits
      },
      default: {
          class: 'sort',
          fn: (a, b) => a
      }
  };
  
    const columnTitles = [
      {
        title: "STT",
        reactIcons: <></>
      },
      {
        title: "Semester",
        reactIcons: <FaSortNumericDown />
      },
      {
        title: "Course Title",
        reactIcons: <FaSortAlphaDown />
      },
      {
        title: "Course Id",
        reactIcons: <FaSort onClick={this.props.onSortChange}/>
      },
      {
        title: "Credits",
        reactIcons: <FaSortNumericDown />
      },
      {
        title: "Process",
        reactIcons: <FaSortNumericDown />
      },
      {
        title: "Exam",
        reactIcons: <FaSortNumericDown />
      },
      {
        title: "Factor",
        reactIcons: <FaSortNumericDown />
      },
      {
        title: "Action",
        reactIcons: <></>
      },
      {
        title: "Point",
        reactIcons: <FaSortNumericDown />
      },
      {
        title: "Grade",
        reactIcons: <FaSortAlphaDown />
      }
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
        <div 
          className="card-body p-0 m-0"
        >
          <table className="table table-bordered table-hover">
            <thead>
              <tr style={{ backgroundColor: '#8C1515', color: '#FFFFFF' }}>
                {columnTitles.map((item, index) => (
                  <th className={((item.title==="Action")||(item.title==="STT")) ? "text-center" : "iconPosition"} key={index}>
                    <label for={index}>{item.title}</label>
                  <i 
                  className={`fas fa-${sortTypes[this.props.currentSort].class}`}
                  onClick={this.props.onSortChange}
                  />
                  {/* <span>{createElement(Component(`Fa${sortTypes[this.props.currentSort].class}`),  {onClick: onSortChange})}</span> */}
                  {/* <span>{item.reactIcons}</span> */}
                  {/* <span>{this.renderIcons(item.title)}</span> */}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
            <tr>
            <td><input maxlength="3" size="3" id="0"/></td>
            <td><input maxlength="5" size="5" id="1"/></td>
            <td><center><input id="2"/></center></td>
            <td><input maxlength="7" size="7" id="3"/></td>
            <td><input maxlength="2" size="2" id="4"/></td>
            <td><center><input maxlength="3" size="5" id="5"/></center></td>
            <td><center><input maxlength="3" size="6" id="6"/></center></td>
            <td><input maxlength="3" size="3" id="7"/></td>
            <td></td>
            <td><input maxlength="3" size="3" id="9"/></td>
            <td><input maxlength="2" size="2" id="10"/></td>
            </tr>
              {this.props.courseList.length !== 0 ? (
                [...this.props.courseList].sort(sortTypes[this.props.currentSort].fn).map((item, index) => (
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
                <DataNotFound />
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
