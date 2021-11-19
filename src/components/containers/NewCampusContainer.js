import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { NewCampusView } from '../views';
import { addCampusThunk } from '../../store/thunks';

class NewCampusContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            imageUrl: "",
            address: "",
            description: "",
            redirect: false,
            redirectId: null,
            errors: {
                name: null,
                address: null,
                validate: null,
                shouldDisplayError: false
        }};
    }

    /* Handle Focus for UX */
    handleFocus = () => {
        this.setState(prevstate => ({
            errors: {
                ...prevstate.errors,
                shouldDisplayError: true
            }
        }));
    }

    /* Validation */
    /*
    * The name and address fields are required.
    */
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value.trim()
        });

        let nameError = false;
        let addressError = false;

        // Name
        if (event.target.name === "name") {
            if (event.target.value.trim() === "") {
                nameError = true;
            }
            if (this.state.address.trim() === "") {
                addressError = true;
            }
        }

        // Address
        if (event.target.name === "address") {
            if (event.target.value.trim() === "") {
                addressError = true;
            }
            if (this.state.name.trim() === "") {
                nameError = true;
            }
        }

        this.setState(prevstate => ({
            errors: {
                ...prevstate.errors,
                name: nameError,
                address: addressError
            }
        }));
    }

    /* Submit New Campus Data */
    validateForm() {
        let nameError, addressError = false;
        if (this.state.name.trim() === "") {
            nameError = true;
        }
        if (this.state.address.trim() === "") {
            addressError = true;
        }
        if (nameError || addressError) {
            this.setState(prevstate => ({
                errors: {
                    ...prevstate.errors,
                    name: nameError,
                    address: addressError,
                    validate: true
                }
            }))
            return false;
        }
        else {
            this.setState(prevstate => ({
                errors: {
                    ...prevstate.errors,
                    name: nameError,
                    address: addressError
                }
            }));
            return true;
        }
    }
    handleSubmit = async event => {
        event.preventDefault();

        if (!this.validateForm()) {
            return;
        }

        const shouldUseImageUrl = (this.state.imageUrl && this.state.imageUrl.trim() !== "") ? true : false;
        const shouldUseDescription = (this.state.description && this.state.description.trim() !== "") ? true : false;

        let campus = {
            name: this.state.name,
            address: this.state.address,
            ...(shouldUseImageUrl && { imageUrl: this.state.imageUrl }),
            ...(shouldUseDescription && { description: this.state.description })
        }

        let newCampus = await this.props.addCampus(campus);

        this.setState({
            name: "",
            description: "",
            imageUrl: "",
            address: "",
            errors: {
                name: null,
                address: null,
                validate: null,
                shouldDisplayError: false
            },
            redirect: true,
            redirectId: newCampus.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to= {`/campus/${this.state.redirectId}`}/>)
        }
        return (
            <NewCampusView
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}
                handleFocus = {this.handleFocus}
                errors = {this.state.errors}
            />
        )
    }
}

const mapDispatch = (dispatch) => {
    return({
        addCampus: (campus) => dispatch(addCampusThunk(campus))
    })
}

export default connect(null, mapDispatch)(NewCampusContainer);