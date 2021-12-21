import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewStudentView from '../views/NewStudentView';
import {fetchAllCampusesThunk, addStudentThunk } from '../../store/thunks';

class NewStudentContainer extends Component {
  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  constructor(props){
      super(props);
      this.state = {
          firstname: "",
          lastname: "",
          imageUrl: "",
          email: "",
          gpa: "",
          campusId: -1,
          redirect: false,
          redirectId: null,
          errors: {
              firstname: null,
              lastname: null,
              email: null,
              gpa: null,
              validate: null,
              shouldDisplayError: false
      }};
  }


  /* Handle Focus for UX */
  handleFocus = () => {
      if (!this.state.errors.shouldDisplayError) {
          this.setState(prevstate => ({
              errors: {
                  ...prevstate.errors,
                  shouldDisplayError: true
              }
          }));
      }
  }

  /* Helper Functions */
  isBlank(input) {
      if (input.trim() === "")
          return true
      return false
  }

  handleSelect = event => {
    this.setState({
      campusId: event.target.value
    })
    // console.log(event.target.value)
  }

  // isValidEmailAddress(address) {
  //   return ! address.match(/.+@.+/);
  // }

  /* Input Validation */
  /*
  * The first name, last name, and email fields are required.
  */
  handleChange = event => {
      this.setState({
          [event.target.name]: event.target.value.trim()
      });

      let firstnameError = false;
      let lastnameError = false;
      let emailError = false;
      let gpaError = false;

      switch(event.target.name) {
        case "firstname":
            if (this.isBlank(event.target.value)) {
                firstnameError = true;
            }
            if (this.isBlank(this.state.lastname)) {
                lastnameError = true;
            }
            if (this.isBlank(this.state.email)) {
                emailError = true;
            }
            break;
        case "lastname":
          if (this.isBlank(event.target.value)) {
              lastnameError = true;
          }
          if (this.isBlank(this.state.firstname)) {
              firstnameError = true;
            }
          if (this.isBlank(this.state.email))
              emailError = true;
          break;
        case "email":
            if (this.isBlank(event.target.value))
                emailError = true;
            if (this.isBlank(this.state.lastname)) {
                lastnameError = true;
            }
            if (this.isBlank(this.state.firstname)) {
              firstnameError = true;
            }
            break;
        default:
            return;
    }

      this.setState(prevstate => ({
          errors: {
              ...prevstate.errors,
              firstname: firstnameError,
              lastname: lastnameError,
              email: emailError,
              gpa: gpaError,
          }
      }));
  }

  /* Validate Entire Form */
  validateForm() {
      let firstnameError = false;
      let lastnameError = false;
      let emailError = false;
      let gpaError = false;

      if (this.isBlank(this.state.firstname))
          firstnameError = true;

      if (this.isBlank(this.state.lastname))
          lastnameError = true;

      if (this.isBlank(this.state.email))
          emailError = true;

      if (this.state.gpa < 0 || this.state.gpa > 4)
          gpaError = true;

      if (firstnameError || lastnameError || emailError || gpaError) {
          this.setState(prevstate => ({
              errors: {
                  ...prevstate.errors,
                  firstname: firstnameError,
                  lastname: lastnameError,
                  email: emailError,
                  gpa: gpaError,
                  validate: true
              }
          }))
          return false;
      }
      else {
          this.setState(prevstate => ({
              errors: {
                  ...prevstate.errors,
                  firstname: firstnameError,
                  lastname: lastnameError,
                  email: emailError,
                  gpa: gpaError,
              }
          }));
          return true;
      }
  }

  /* Submit Form */
  handleSubmit = async event => {
      event.preventDefault();

      if (!this.validateForm()) {
          return;
      }
      
      let actualCampusId = null;

      if (this.state.campusId >= 0){
          actualCampusId = this.state.campusId;
      }

      const shouldUseImageUrl = (this.state.imageUrl && this.state.imageUrl.trim() !== "") ? true : false;

      let student = {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          gpa: parseFloat(this.state.gpa),
          campusId: actualCampusId,
          ...(shouldUseImageUrl && { imageUrl: this.state.imageUrl }),
      }

      let newStudent = await this.props.addStudent(student);
      console.log(newStudent);

      this.setState({
          firstname: "",
          lastname: "",
          imageUrl: "",
          email: "",
          gpa: "",
          errors: {
              firstname: null,
              lasttname: null,
              email: null,
              gpa: null,
              validate: null,
              shouldDisplayError: false
          },
          redirect: true,
          redirectId: newStudent.id
      });
  }

  componentWillUnmount() {
      this.setState({ redirect: false, redirectId: null });
  }

  render() {
      if (this.state.redirect) {
          return (<Redirect to= {`/student/${this.state.redirectId}`}/>)
      }
      return (
          <NewStudentView
              handleChange = {this.handleChange}
              handleSubmit = {this.handleSubmit}
              handleFocus = {this.handleFocus}
              handleSelect = {this.handleSelect}
              errors = {this.state.errors}
              allCampuses = {this.props.allCampuses}
          />
          
      )
  }
}

const mapState = (state) => {
  return({
    allCampuses: state.allCampuses
  })
}

/* Map Dispatch to Props to Utilize Functional Thunks */
const mapDispatch = (dispatch) => {
  return({
      fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
      addStudent: (student) => dispatch(addStudentThunk(student))
  })
}

export default connect(mapState, mapDispatch)(NewStudentContainer);