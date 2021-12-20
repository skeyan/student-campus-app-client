import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { EditStudentView } from '../views';
import { 
    addStudentThunk,
    fetchStudentThunk,
    editStudentThunk 
} from '../../store/thunks';

class EditStudentContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
}

const mapDispatch = (dispatch) => {
    return({
        addCampus: (campus) => dispatch(addStudentThunk(campus)),
        fetchCampus: (campusId) => dispatch(fetchStudentThunk(campusId)),
        editCampus: (campus) => dispatch(editStudentThunk(campus))
    })
};

export default connect(null, mapDispatch)(EditStudentContainer);