import * as types from "../constants/ActionTypes";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  courseList: [
    {
      generateId: uuidv4(),
      STT: 1,
      semester: 20191,
      courseTitle: 'Graduation Practicum',
      courseId: 'PH5000',
      credits: 3,
      process: 9.5,
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

export const TranscriptReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_ORIGIN: {
      state.errors = action.errors;
      state.info = action.info;
      return { ...state };
    }
    case types.ADD_NEW_COURSE: {
      const taiKhoanCreate = { ...state.info };
      const taiKhoanUpdate = [...state.courseList, taiKhoanCreate];
      return { ...state, courseList: taiKhoanUpdate };
    }
    case types.EDIT_THIS_COURSE: {
      state.info = action.item;
      state.errors = {
        courseId: '',
        courseTitle: '',
        credits: '',
        process: '',
        examination: ''
      };
      state.isReg = false;
      return { ...state };
    }
    case types.UPDATE_THIS_COURSE: {
      const taiKhoanUpdate = [...state.courseList];
      let findTaiKhoan = taiKhoanUpdate.find(
        acc => acc.courseId === state.info.courseId
      );

      if (findTaiKhoan) {
        findTaiKhoan.courseTitle = state.info.courseTitle;
        findTaiKhoan.credits = state.info.credits;
        findTaiKhoan.factor = state.info.factor;
        findTaiKhoan.process = state.info.process;
        findTaiKhoan.examination = state.info.examination;
      }

      state.courseList = taiKhoanUpdate;
      state.info = {
        courseId: '',
        courseTitle: '',
        credits: '',
        factor: 0.7,
        process: '',
        examination: ''
      };
      state.isReg = true;

      return { ...state };
    }
    case types.CANCEL_THIS_UPDATE: {
      state.info = {
        courseId: '',
        courseTitle: '',
        credits: '',
        process: '',
        examination: '',
        factor: 0.7
      };
      state.errors = {
        courseId: '',
        courseTitle: '',
        credits: '',
        process: '',
        examination: ''
      };
      state.isReg = true;
      return { ...state };
    }
    case types.DELETE_THIS_COURSE: {
      const taiKhoanUpdate = [...state.courseList];
      let listTaiKhoanDaXoa = taiKhoanUpdate.filter(
        acc => acc.courseId !== action.courseId
      );
      state.courseList = listTaiKhoanDaXoa;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
