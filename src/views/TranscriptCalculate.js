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
} from 'react-icons/fa';
import Footer from './Footer';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
class TranscriptCalculate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saveAction: false,
      updateAction: false,
      deleteAction: false,
      courseChange: "",
      takeAction: false,
      currentSort: 'default',
      copyright: false,
      minimize: true
    };
  }

  componentDidUpdate(previousProps, previousState){
   console.log("previousProps", previousProps)
   console.log("previousState", previousState)
  // if (previousProps.courseList.length <= 3) {
  //   this.setState({
  //     copyright: true
  //   })
  // }
  // else return;
  // return
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
    if(this.props.courseList.length <= 2) {
      this.setState({
        copyright: true
      })
    }
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
    if(this.props.courseList.length <= 3) {
      this.setState({
        copyright: true
      })
    }
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
    switch (currentSort) {
      case 'down':
        nextSort = 'up';
        // return (<FaSortDown />)
        break;
      case 'up':
        nextSort = 'default';
        // return (<FaSortUp />)
        break;
      case 'default':
        nextSort = 'down';
        // return (<FaSort />)
        break;
    }

    this.setState({
      currentSort: nextSort
    });
  };

  handleZoomIn = () => {
    if (this.state.minimize)
    this.setState({ minimize: false });
  };

  handleZoomOut = () => {
    if (!this.state.minimize)
    this.setState({ minimize: true });
  };

  render() {
    const {
      deleteAction,
      saveAction,
      updateAction,
      takeAction,
      currentSort,
      courseChange,
      copyright
    } = this.state;
    return (
      <div>
        <div className="container">
          <EntryForm
            deleteCourseOnFailure={this.deleteCourseOnFailure}
            updateCourseOnSuccess={this.updateCourseOnSuccess}
            updateCourseOnFailure={this.updateCourseOnFailure}
            saveCourseOnSuccess={this.saveCourseOnSuccess}
            saveCourseOnFailure={this.saveCourseOnFailure}
            minimize={this.state.minimize}
            handleZoomIn={this.handleZoomIn}
            handleZoomOut={this.handleZoomOut}
          />
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
            minimize={this.state.minimize}
          />
        </div>
        <FooterStyle 
          copyright={copyright}
          minimize={this.state.minimize}>
          <Footer />
        </FooterStyle>
      </div>
    );
  }
}

const FooterStyle = styled.div`
  width: 100%;
  height: 60px;
  background: #1f568b;
  text-align: center;
  padding: 10px;
  color: white;
  bottom: 0px;
  position: fixed;
`;

const mapStateToProps = state => ({
  courseList: state.TranscriptReducer.courseList
});

export default connect(mapStateToProps)(TranscriptCalculate);
