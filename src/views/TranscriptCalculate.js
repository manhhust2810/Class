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
      courseChange: ""
    };
  }

  saveCourseOnSuccess = (courseId) => {
    this.setState({
      saveAction: true,
      courseChange: courseId
    })
  }

  saveCourseOnFailure = () => {
    this.setState({
        saveAction: false
    })
  }

  updateCourseOnSuccess = (courseId) => {
    this.setState({
        updateAction: true,
        courseChange: courseId
    })
  }

  updateCourseOnFailure = () => {
    this.setState({
        updateAction: false
    })
  }

  deleteCourseOnSuccess = (courseId) => {
    this.setState({
        deleteAction: true,
        courseChange: courseId
    })
  }

  deleteCourseOnFailure = () => {
    this.setState({
        deleteAction: false
    })
  }

  render() {
    const { deleteAction, saveAction, updateAction } = this.state;
    return (
      <div className="container">
        <EntryForm 
            updateAction={updateAction} 
            saveAction={saveAction}
            courseChange={this.state.courseChange} 
            deleteCourseOnSuccess={this.deleteCourseOnSuccess}
            deleteCourseOnFailure={this.deleteCourseOnFailure}
            updateCourseOnSuccess={this.updateCourseOnSuccess}
            updateCourseOnFailure={this.updateCourseOnFailure}
            saveCourseOnSuccess={this.saveCourseOnSuccess}
            saveCourseOnFailure={this.saveCourseOnFailure} 
            />
        <Result 
            deleteAction={deleteAction}
            updateAction={updateAction}
            courseChange={this.state.courseChange} 
            saveAction={saveAction} 
            deleteCourseOnSuccess={this.deleteCourseOnSuccess}
            deleteCourseOnFailure={this.deleteCourseOnFailure}
            updateCourseOnSuccess={this.updateCourseOnSuccess}
            updateCourseOnFailure={this.updateCourseOnFailure}
            saveCourseOnSuccess={this.saveCourseOnSuccess}
            saveCourseOnFailure={this.saveCourseOnFailure}
            />
      </div>
    );
  }
}

export default TranscriptCalculate;
