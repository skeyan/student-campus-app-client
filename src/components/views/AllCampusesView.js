import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "../styles/AllCampuses.css";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const AllCampusesView = (props) => {

  if (!props.allCampuses.length || props.allCampuses.length <= 0) {
    return (
      <div className="container">
        <Link className="campus-add-button" to={`/newcampus`}>
          <button type="button" className="btn btn-primary">+ Add Campus</button>
        </Link>
        <div className="campuses-container">
          There are no campuses.
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Link className="campus-add-button" to={`/newcampus`}>
        <button type="button" className="btn btn-primary">+ Add Campus</button>
      </Link>
      <div className="campuses-container">
        {props.allCampuses.map((campus) => (
          <div key={campus.id} className="card campus">
            <img src={campus.imageUrl} className="card-img-top" alt="campus"/>
            <div className="card-body">
              <Button onClick={() => props.deleteCampus(campus.id)} className="campus-nav-button">
                <DeleteIcon />
              </Button>
              <Link to={`/campus/${campus.id}`}>
                <h1 className="card-title">{campus.name}</h1>
              </Link>
              <p className="card-text">{campus.address}</p>
              {campus.description && <p className="campus-description">{campus.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;