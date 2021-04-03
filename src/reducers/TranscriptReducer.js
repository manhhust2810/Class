import * as types from "../constants/ActionTypes";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  courseList: [
    {
      generateId: uuidv4(),
      STT: 1,
      semester: 20171,
      courseTitle: 'General Chemistry',
      courseId: 'CH1010',
      credits: 3,
      process: 8.5,
      examination: 9,
      factor: 0.5,
      action: 'Default',
      point: function(){
        return this.process*(1-this.factor)+this.examination*this.factor},
      grade: "A"
    },
    {
      generateId: uuidv4(),
      STT: 2,
      semester: 20191,
      courseTitle: 'Graduation Project',
      courseId: 'PH5100',
      credits: 9,
      process: 9.3,
      examination: 8.3,
      factor: 0.5,
      action: 'Default',
      point: function(){
        return this.process*(1-this.factor)+this.examination*this.factor},
      grade: "A"
    },
    {
      generateId: uuidv4(),
      STT: 3,
      semester: 20172,
      courseTitle: 'Light Measurement',
      courseId: 'PH4650',
      credits: 3,
      process: 9,
      examination: 8,
      factor: 0.7,
      action: 'Default',
      point: function(){
        return this.process*(1-this.factor)+this.examination*this.factor},
      grade: "B+"
    },
    {
      generateId: uuidv4(),
      STT: 2,
      semester: 20182,
      courseTitle: 'Laser Physics',
      courseId: 'PH4660',
      credits: 2,
      process: 4.5,
      examination: 6.5,
      factor: 0.7,
      action: 'Default',
      point: function(){
        return this.process*(1-this.factor)+this.examination*this.factor},
      grade: "C"
    }
  ],
  errors: {
    courseId: '',
    courseTitle: '',
    credits: '',
    process: '',
    examination: ''
  },
  info: {
    courseId: '',
    courseTitle: '',
    credits: '',
    process: '',
    examination: '',
    factor: 0.7
  },
  isReg: true
};

const TranscriptReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_ORIGIN: 
      return { 
        ...state,
        errors: action.errors,
        info: action.info
      };
    
    case types.ADD_NEW_COURSE: 
      return { 
        ...state,
        info: {
          courseId: '',
          courseTitle: '',
          credits: '',
          process: '',
          examination: '',
          factor: 0.7
        },
        errors: {
          courseId: '',
          courseTitle: '',
          credits: '',
          process: '',
          examination: ''
        },
        courseList: [...state.courseList, { ...state.info }] 
      };
    
    case types.EDIT_THIS_COURSE: 
      return { 
        ...state,
        info: action.item,
        errors: {
          courseId: '',
          courseTitle: '',
          credits: '',
          process: '',
          examination: ''
        },
        isReg: false
      };
    
    case types.UPDATE_THIS_COURSE: 
      const cloneCourseList1st = [...state.courseList];
      let findCourse = cloneCourseList1st.find(
        post => post.courseId === state.info.courseId
      );
      if (findCourse) {
        findCourse.courseTitle = state.info.courseTitle;
        findCourse.credits = state.info.credits;
        findCourse.factor = state.info.factor;
        findCourse.process = state.info.process;
        findCourse.examination = state.info.examination;
      }
      return { 
        ...state,
        isReg: true,
        courseList: cloneCourseList1st,
        info: {
          courseId: '',
          courseTitle: '',
          credits: '',
          factor: 0.7,
          process: '',
          examination: ''
        }
      };
    
    case types.CANCEL_THIS_UPDATE:
      return { 
        ...state,
        info: {
          courseId: '',
          courseTitle: '',
          credits: '',
          process: '',
          examination: '',
          factor: 0.7
        },
        errors: {
          courseId: '',
          courseTitle: '',
          credits: '',
          process: '',
          examination: ''
        },
        isReg: true
      };
    
    case types.DELETE_THIS_COURSE: 
      const cloneCourseList2nd = [...state.courseList];
      return {
        ...state,
        courseList: cloneCourseList2nd.filter(
          item => item.courseId !== action.courseId
        )
      };
    default:
      return { ...state };
  }
};

export default TranscriptReducer;