import React, { Component } from "react";
import { connect } from "react-redux";
import { 
  fetchCampusThunk, 
  editCampusThunk, 
  deleteCampusThunk 
} from "../../store/thunks";

import { CampusView } from "../views";

class CampusContainer extends Component {
  componentDidMount() {
    //getting campus ID from url
    this.props.fetchCampus(this.props.match.params.id);
  }

  render() {
    return (
      <CampusView 
        campus={this.props.campus}
        editCampus={this.props.editCampus}
        deleteCampus={this.props.deleteCampus}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editCampus: (campus) => dispatch(editCampusThunk(campus)),
    deleteCampus: (campusId) => dispatch(deleteCampusThunk(campusId))
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);