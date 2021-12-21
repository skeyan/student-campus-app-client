import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import {
  fetchAllStudentsThunk,
  deleteStudentThunk,
  addStudentThunk
} from '../../store/thunks';

import AllStudentsView from '../views/AllStudentsView';

class AllStudentsContainer extends Component {
    componentDidMount() {
      this.props.fetchAllStudents();
    }
    render(){
        return(
            <div>
                <AllStudentsView
                  students={this.props.allStudents}
                  deleteStudent={this.props.deleteStudent}
                  addStudent = {this.props.addStudent}

                />
            </div>
        )
    }
}

// Map state to props;
const mapState = (state) => {
  return {
    allStudents: state.allStudents,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId)),
    addStudent: (student) => dispatch(addStudentThunk(student))
  };
};

export default withRouter(connect(mapState, mapDispatch)(AllStudentsContainer));