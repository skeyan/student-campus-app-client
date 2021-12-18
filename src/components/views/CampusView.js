import { PropTypes } from "@material-ui/core";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';

import "../styles/Campus.css"
import { deleteCampus, editCampus } from "../../store/actions/actionCreators";

const CampusView = (props) => {
  const {campus} = props;
  const {deleteCampus} = props;
  
  // delteCampus then go to AllCampuses to refresh
  const deleteHelper = (campusID) => {
    deleteCampus(campusID);
    <Link to={"/campuses"}></Link>
  }
  
  /*
  if (!campus.students.length || campus.students.length <= 0){
    return (
      <div className="campus-container">
        <div className="campus-content-container">
          <h1>{campus.name}</h1>
          <Link to={"/campuses"} className="campus-delete-button">
            <Button onClick={() => deleteHelper(campus.id)}>
              <DeleteIcon />
            </Button>
          </Link>
          <p>{campus.address}</p>
          <ul> There are no students in this Campus.</ul>
        </div>
      </div>
    );
  } */

  return (
    <div className="campus-container">
      <div className="campus-content-container">
        <img src={campus.imageUrl} className="campus-img-top" alt="campus" /> 
        <br/><br/>
        <Link to={"/campuses"} className="campus-nav-button">
          <Button onClick={() => deleteHelper(campus.id)}>
            <DeleteIcon />
          </Button>
        </Link>
        <Link to={`/campus/${campus.id}/edit`} className="campus-nav-button">
          <Button>
            <EditIcon />
          </Button>
        </Link>

        <h1>{campus.name}</h1>
        <p>{campus.address}</p>
        <p> - {campus.description}</p>

        {campus.students.length === 0 ? (
          <ul> There are no students in this Campus.</ul>
        ) : (
        <ul>
          {campus.students.map( student => {
            let name = student.firstname + " " + student.lastname;
            return (
              <li key={student.id}>{name}</li>
            );
          })}
        </ul>
        )}
      </div>
    </div>
  );

};


export default CampusView;