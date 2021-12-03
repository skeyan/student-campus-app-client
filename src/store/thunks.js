import * as ac from './actions/actionCreators';
const axios = require('axios');

// THUNKS

// All campuses
export const fetchAllCampusesThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`/api/campuses`);
    dispatch(ac.fetchAllCampuses(res.data));
  } catch(err) {
    console.error(err);
  }
};

export const addCampusThunk = (campus) => async (dispatch) => {
  try {
    let res = await axios.post(`/api/campuses`, campus);
    dispatch(ac.addCampus(res.data));
    return res.data;
  } catch(err) {
    console.error(err);
  }
};
// TO-D0: Add thunks for edit campus & delete campus

// Single campus
export const fetchCampusThunk = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`/api/campuses/${id}`);
    dispatch(ac.fetchCampus(res.data));
  } catch(err) {
    console.error(err);
  }
};

// All students
export const fetchAllStudentsThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`/api/students`);
    dispatch(ac.fetchAllStudents(res.data));
  } catch(err) {
    console.error(err);
  }
};

export const addStudentThunk = (student) => async (dispatch) => {
  try {
    let res = await axios.post(`/api/students`, student);
    dispatch(ac.addStudent(res.data));
    return res.data;
  } catch(err) {
    console.error(err);
  }
};

export const deleteStudentThunk = studentId => async dispatch => {
  try {
    await axios.delete(`/api/students/${studentId}`);
    // Delete succesful so change state with dispatch
    dispatch(ac.deleteStudent(studentId));
  } catch(err) {
    console.error(err);
  }
};

export const editStudentThunk = student => async dispatch => {
  try {
    let updatedStudent = await axios.put(`/api/students/${student.id}`, student);
    dispatch(ac.editStudent(updatedStudent));
  } catch(err) {
    console.error(err);
  }
};

// Single student
export const fetchStudentThunk = id => async dispatch => {
  try {
    let res = await axios.get(`/api/students/${id}`);
    dispatch(ac.fetchStudent(res.data));
  } catch(err) {
    console.error(err);
  }
};
