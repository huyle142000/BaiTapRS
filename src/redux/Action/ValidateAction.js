import {
  CHECK_STUDENT,
  ADD_STUDENT,
  UPDATE_STUDENT,
  FILTER_STUDENT,
  BACKLIST_STUDENT,
  DELETE_STUDENT,
} from "../TypeAction/ValidateType";

export const checkStudent = (student) => {
  return {
    type: CHECK_STUDENT,
    student,
  };
};
export const updateStudent = (student) => {
  return {
    type: UPDATE_STUDENT,
    student,
  };
};

export const addStudent = (student) => {
  return {
    type: ADD_STUDENT,
    payload: student,
  };
};
export const filterStudent = (student) => {
  return {
    type: FILTER_STUDENT,
    student,
  };
};
export const backList = () => {
  return {
    type: BACKLIST_STUDENT,
  };
};

export const deleteStudent = (student) => {
  return {
    type: DELETE_STUDENT,
    student,
  };
};
