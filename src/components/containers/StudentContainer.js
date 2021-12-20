import React, { Component } from "react";
import { connect } from "react-redux";
import { 
  fetchStudentThunk, 
  editStudentThunk, 
  deleteStudentThunk
} from "../../store/thunks";

import { StudentView } from "../views";

class StudentContainer extends Component {
  componentDidMount() {
    //getting student ID from url
    this.props.fetchStudent(this.props.match.params.id);
  }

  render() {
    return (
      <StudentView
        student={this.props.student}
        editStudent = {this.props.editStudent}
        deleteStudent = {this.props.deleteStudent}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    editStudent: (student) => dispatch(editStudentThunk(student)),
    deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId))
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);