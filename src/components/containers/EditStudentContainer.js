import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { EditStudentView } from '../views';
import {
    fetchAllCampusesThunk,
    addStudentThunk,
    fetchStudentThunk,
    editStudentThunk
} from '../../store/thunks';

class EditStudentContainer extends Component {
    componentDidMount() {
        this.props.fetchAllCampuses();
      } 
    constructor(props) {
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


            }
        };
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

    /* Helper Function */
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

        switch (event.target.name) {
            case "firstname":
                if (this.isBlank(event.target.value)) {
                    firstnameError = true;
                }
                if (this.isBlank(this.state.email)) {
                    emailError = true;
                }
                if (this.isBlank(this.state.lastname)) {
                    lastnameError = true;
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
                if (this.isBlank(this.state.firstname))
                    firstnameError = true;
                if (this.isBlank(this.state.lastname))
                    lastnameError = true;
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
    const path = window.location.pathname;
    const isEdit = path.includes("edit");
    const id = parseInt(path.split('/').slice(-2, -1)[0]);


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
        id: isEdit ? id : null,
    }

    let editStudent = await this.props.editStudent(student);
    console.log(editStudent);

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
            gpa:null,
            validate: null,
            shouldDisplayError: false
        },
        redirect: true,
        redirectId: isEdit ? id: editStudent.id,
        id:null
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
        <EditStudentView
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


const mapDispatch = (dispatch) => {
    return ({
        addStudent: (student) => dispatch(addStudentThunk(student)),
        fetchStudent: (studentId) => dispatch(fetchStudentThunk(studentId)),
        editStudent: (student) => dispatch(editStudentThunk(student)),
        fetchAllCampuses: () => dispatch(fetchAllCampusesThunk())
    })
}

export default connect(mapState, mapDispatch)(EditStudentContainer);