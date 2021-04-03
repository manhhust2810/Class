import React, { Component } from 'react';
import EntryForm from '../components/TranscriptCalculate/EntryForm';
import Result from '../components/TranscriptCalculate/Result';
import { 
  FaSortNumericDown, 
  FaSortAlphaDown,
  FaSort,
  FaSortDown,
  FaSortUp,
  BsExclamationTriangleFill
} from "react-icons/fa";
class TranscriptCalculate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saveAction: false,
      updateAction: false,
      deleteAction: false,
      courseChange: "",
      takeAction: false,
      currentSort: "default"
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
    }, 6000);
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
    }, 6000);
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
    }, 6000);
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

  onSortChange = () => {
		const { currentSort } = this.state;
		let nextSort;
    switch(currentSort) {
      case "down":
        nextSort = 'up';
        // return (<FaSortDown />)
        break;
      case "up":
        nextSort = 'default';
        // return (<FaSortUp />)
        break;
      case "default":
        nextSort = 'down';
        // return (<FaSort />)
        break;
    };

		this.setState({
			currentSort: nextSort
		});
	};

  render() {
    const { 
      deleteAction, 
      saveAction, 
      updateAction,
      takeAction,
      currentSort,
      courseChange
    } = this.state;
    return (
      <div className="container">
        {/* <EntryForm
          deleteCourseOnFailure={this.deleteCourseOnFailure}
          updateCourseOnSuccess={this.updateCourseOnSuccess}
          updateCourseOnFailure={this.updateCourseOnFailure}
          saveCourseOnSuccess={this.saveCourseOnSuccess}
          saveCourseOnFailure={this.saveCourseOnFailure}
        /> */}
        <Result
          deleteAction={deleteAction}
          updateAction={updateAction}
          saveAction={saveAction}
          courseChange={courseChange}
          deleteCourseOnSuccess={this.deleteCourseOnSuccess}
          updateCourseOnFailure={this.updateCourseOnFailure}
          saveCourseOnFailure={this.saveCourseOnFailure}
          takeAction={takeAction}
          currentSort={currentSort}
          onSortChange={this.onSortChange}
        />
      </div>
    );
  }
}

export default TranscriptCalculate;
