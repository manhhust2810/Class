import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions/index';

class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertCourseId: '',
      alertCredits: '',
      alertProcess: '',
      alertExamination: '',
      alertCourseTitle: ''
    };
  }

  handleChangeInput = event => {
    let { value, name } = event.target;

    let typeInput = event.target.getAttribute('typeinput');

    const newInfo = { ...this.props.infoTaiKhoan };

    newInfo[name] = value;

    const newErrors = { ...this.props.errorsTaiKhoan };

    switch (typeInput) {
      case 'credits':
        const regexCredits = /^\d$|^1[0-2]$/;
        if (!regexCredits.test(value)) {
          if (value.toString().trim() === '') {
            newErrors[name] = `*This ${name} field is required!`;
            this.setState({
              alertCredits: 'text-info'
            });
          } else {
            newErrors[name] = `The ${name} entered is incorrect format!`;
            this.setState({
              alertCredits: 'text-danger'
            });
          }
        } else {
          newErrors[name] = `The ${name} entered is accepted!`;
          this.setState({
            alertCredits: 'text-success'
          });
        }
        break;

      case 'process':
        const regexProcess = /^\d\.[1-9]$|^\d$|^10$/;
        if (!regexProcess.test(value)) {
          if (value.toString().trim() === '') {
            newErrors[name] = `*This ${name} field is required!`;
            this.setState({
              alertProcess: 'text-info'
            });
          } else {
            newErrors[name] = `The ${name} entered is incorrect format!`;
            this.setState({
              alertProcess: 'text-danger'
            });
          }
        } else {
          newErrors[name] = `The ${name} entered is accepted!`;
          this.setState({
            alertProcess: 'text-success'
          });
        }
        break;

      case 'examination':
        const regexExamination = /^\d\.[1-9]$|^\d$|^10$/;
        if (!regexExamination.test(value)) {
          if (value.toString().trim() === '') {
            newErrors[name] = `*This ${name} field is required!`;
            this.setState({
              alertExamination: 'text-info'
            });
          } else {
            newErrors[name] = `The ${name} entered is incorrect format!`;
            this.setState({
              alertExamination: 'text-danger'
            });
          }
        } else {
          newErrors[name] = `The ${name} entered is accepted!`;
          this.setState({
            alertExamination: 'text-success'
          });
        }
        break;

      case 'courseid':
        const regexCourseId = /^[A-Z]{2,3}[0-9]{4}$/;
        if (!regexCourseId.test(value)) {
          if (value.toString().trim() === '') {
            newErrors[name] = `*This ${name} field is required!`;
            this.setState({
              alertCourseId: 'text-info'
            });
          } else {
            newErrors[name] = `The ${name} entered is incorrect format!`;
            this.setState({
              alertCourseId: 'text-danger'
            });
          }
        } else {
          newErrors[name] = `The ${name} entered is accepted!`;
          this.setState({
            alertCourseId: 'text-success'
          });
        }
        break;

      case 'coursetitle':
        if (value.toString().trim() === '') {
          newErrors[name] = `*This ${name} field is required!`;
          this.setState({
            alertCourseTitle: 'text-info'
          });
        } else {
          newErrors[name] = `The ${name} entered is accepted!`;
          this.setState({
            alertCourseTitle: 'text-success'
          });
        }
        break;

      default:
        newErrors[name] = `The ${name} entered is incorrect format!`;
        break;
    }

    this.props.handleOrigin(newErrors, newInfo);
  };

  handleSubmit = event => {
    event.preventDefault(); // Chặn sự kiện submit

    let valid = true;
    // console.log('kt1', this.props.infoTaiKhoan);
    // console.log('kt2', this.props.errorsTaiKhoan);

    for (const key in this.props.infoTaiKhoan) {
      if (this.props.infoTaiKhoan[key].toString().trim() === '') {
        valid = false;
      }
    }

    // console.log('valid', valid);

    for (const key in this.props.errorsTaiKhoan) {
      if (this.props.errorsTaiKhoan[key].toString().includes('incorrect')) {
        valid = false;
      }
    }

    // console.log('valid', valid);

    if (!valid) {
      alert('Dữ liệu không hợp lệ!');
      return false;
    } else return true;
  };

  handleSave = (event, courseId) => {
    let flag = this.handleSubmit(event);
    if (flag) {
      this.props.addNewCourse();
      this.props.saveCourseOnSuccess(courseId);
      this.props.updateCourseOnFailure();
      this.props.deleteCourseOnFailure();
    }
  };

  handleUpdate = courseId => {
    let valid = true;

    // console.log('infoTaiKhoan', this.props.infoTaiKhoan);

    for (const key in this.props.infoTaiKhoan) {
      if (this.props.infoTaiKhoan[key].toString().trim() === '') {
        valid = false;
      }
    }

    for (const key in this.props.errorsTaiKhoan) {
      if (this.props.errorsTaiKhoan[key].toString().includes('incorrect')) {
        valid = false;
      }
    }

    if (!valid) {
      alert('Dữ liệu không hợp lệ!');
      return;
    } else {
      for (const key in this.props.errorsTaiKhoan) {
        this.props.errorsTaiKhoan[key] = "";
      }
      // console.log('log ra', this.props.errorsTaiKhoan);
      this.props.updateThisCourse();
      this.props.updateCourseOnSuccess(courseId);
      this.props.deleteCourseOnFailure();
      this.props.saveCourseOnFailure();
    }
  };

  render() {
    const {
      courseId,
      courseTitle,
      credits,
      factor,
      process,
      examination
    } = this.props.infoTaiKhoan;

    return (
      <div className="table-format">
        <div className="card mt-4">
          <div className="card-header bg-light">
            <h5 className="m-0 p-0">Entry Form</h5>
          </div>
          <div className="card-body">
            <form onSubmit={event => this.handleSave(event, courseId)}>
              <div className="row">
                <div className="col-6">
                  <label 
                  className="p-0 m-0 pb-1"
                  for="courseId">Course Id</label>
                  <input
                    type="text"
                    id="courseId"
                    typeinput="courseid"
                    className="form-control"
                    name="courseId"
                    size="7"
                    maxlength="7"
                    value={courseId}
                    onChange={this.handleChangeInput}
                    disabled={!this.props.isReg}
                  />
                  <p className={this.state.alertCourseId}>
                    {this.props.errorsTaiKhoan.courseId}
                  </p>
                </div>
                <div className="col-6">
                  <label 
                  className="p-0 m-0 pb-1"
                  for="courseTitle">Course Title</label>
                  <input
                    type="text"
                    typeinput="coursetitle"
                    id="courseTitle"
                    size="50"
                    maxlength="50"
                    className="form-control"
                    name="courseTitle"
                    value={courseTitle}
                    onChange={this.handleChangeInput}
                  />
                  <p className={this.state.alertCourseTitle}>
                    {this.props.errorsTaiKhoan.courseTitle}
                  </p>
                </div>
                <div className="col-6">
                  <label 
                  className="p-0 m-0 pt-3 pb-1"
                  for="credits">Credits</label>
                  <input
                    type="text"
                    size="2"
                    maxlength="2"
                    className="form-control"
                    name="credits"
                    typeinput="credits"
                    id="credits"
                    value={credits}
                    onChange={this.handleChangeInput}
                  />
                  <p className={this.state.alertCredits}>
                    {this.props.errorsTaiKhoan.credits}
                  </p>
                </div>
                <div className="col-6">
                  <label 
                  className="p-0 m-0 pt-3 pb-1"
                  for="factor"
                  >Factor</label>
                  <select
                    className="form-control"
                    name="factor"
                    value={factor}
                    id="factor"
                    onChange={this.handleChangeInput}
                  >
                    <option>{this.props.infoTaiKhoan.factor}</option>
                    <option>0.5</option>
                    <option>0.6</option>
                    <option>0.7</option>
                    <option>0.8</option>
                  </select>
                </div>
                <div className="col-6">
                  <label 
                  className="p-0 m-0 pt-3 pb-1"
                  for="process"
                  >Process
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="process"
                    size="3"
                    id="process"
                    maxlength="3"
                    typeinput="process"
                    value={process}
                    onChange={this.handleChangeInput}
                  />
                  <p className={this.state.alertProcess}>
                    {this.props.errorsTaiKhoan.process}
                  </p>
                </div>
                <div className="col-6">
                  <label 
                  className="p-0 m-0 pt-3 pb-1"
                  for="examination">Examination</label>
                  <input
                    type="text"
                    className="form-control"
                    name="examination"
                    id="examination"
                    size="3"
                    maxlength="3"
                    typeinput="examination"
                    value={examination}
                    onChange={this.handleChangeInput}
                  />
                  <p className={this.state.alertExamination}>
                    {this.props.errorsTaiKhoan.examination}
                  </p>
                </div>
                <div className="col-12 mt-3">
                  <button
                    className={
                      this.props.isReg
                        ? 'btn mr-2 btn-success'
                        : 'btn mr-2 btn-light'
                    }
                    disabled={!this.props.isReg}
                    onClick={this.saveCourse}
                  >
                    Save
                  </button>
                  <button
                    className={
                      !this.props.isReg
                        ? 'btn mr-2 btn-primary'
                        : 'btn mr-2 btn-light'
                    }
                    disabled={this.props.isReg}
                    onClick={() => this.handleUpdate(courseId)}
                  >
                    Update
                  </button>
                  {!this.props.isReg ? (
                    <button
                      className="btn mr-2 btn-danger"
                      onClick={this.props.cancelThisUpdate}
                    >
                      Cancel
                    </button>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ListTaiKhoan: state.TranscriptReducer.courseList,
  errorsTaiKhoan: state.TranscriptReducer.errors,
  infoTaiKhoan: state.TranscriptReducer.info,
  isReg: state.TranscriptReducer.isReg
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    cancelThisUpdate: () => {
      dispatch(action.cancelThisUpdate());
    },
    addNewCourse: () => {
      dispatch(action.addNewCourse());
    },
    handleOrigin: (newErrors, newInfo) => {
      dispatch(action.handleOrigin(newErrors, newInfo));
    },
    updateThisCourse: () => {
      dispatch(action.updateThisCourse());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryForm);