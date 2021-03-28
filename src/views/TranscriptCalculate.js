import React, { Component } from 'react';
import EntryForm from '../components/Blockchain/EntryForm';
import Result from '../components/Blockchain/Result';
class TranscriptCalculate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saveAction: false,
      updateAction: false,
      deleteAction: false,
      courseChange: '',
      takeAction: false
    };
  }

  saveCourseOnSuccess = courseId => {
    this.setState({
      saveAction: true,
      courseChange: courseId,
      takeAction: true
    });
    setTimeout(() => {
      this.setState({
        takeAction: false
      });
    }, 3000);
  };

  saveCourseOnFailure = () => {
    this.setState({
      saveAction: false
    });
  };

  updateCourseOnSuccess = courseId => {
    this.setState({
      updateAction: true,
      courseChange: courseId,
      takeAction: true
    });
    setTimeout(() => {
      this.setState({
        takeAction: false
      });
    }, 3000);
  };

  updateCourseOnFailure = () => {
    this.setState({
      updateAction: false
    });
  };

  deleteCourseOnSuccess = courseId => {
    this.setState({
      deleteAction: true,
      courseChange: courseId,
      takeAction: true
    });
    setTimeout(() => {
      this.setState({
        takeAction: false
      });
    }, 3000);
  };

  deleteCourseOnFailure = () => {
    this.setState({
      deleteAction: false
    });
  };

  hiddenMessage = () => {
    this.setState({
      takeAction: false
    });
  };

  render() {
    const { deleteAction, saveAction, updateAction } = this.state;
    return (
      <div className="container">
        <EntryForm
          deleteCourseOnFailure={this.deleteCourseOnFailure}
          updateCourseOnSuccess={this.updateCourseOnSuccess}
          updateCourseOnFailure={this.updateCourseOnFailure}
          saveCourseOnSuccess={this.saveCourseOnSuccess}
          saveCourseOnFailure={this.saveCourseOnFailure}
        />
        <Result
          deleteAction={deleteAction}
          updateAction={updateAction}
          saveAction={saveAction}
          courseChange={this.state.courseChange}
          deleteCourseOnSuccess={this.deleteCourseOnSuccess}
          updateCourseOnFailure={this.updateCourseOnFailure}
          saveCourseOnFailure={this.saveCourseOnFailure}
          takeAction={this.state.takeAction}
        />
      </div>
    );
  }
}

export default TranscriptCalculate;
