import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "../styles/AllCampuses.css";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length || props.allCampuses.length <= 0) {
    return (
      <div className="campuses-container">There are no campuses.</div>
    );
  }

  return (
    <div className="campuses-container">
      {props.allCampuses.map((campus) => (
        <div key={campus.id} className="card campus">
          <img src={campus.imageUrl} className="card-img-top" alt="campus"/>
          <div className="card-body">
            <Link to={`/campus/${campus.id}`}>
              <h1 className="card-title">{campus.name}</h1>
            </Link>
            <p className="card-text">{campus.address}</p>
            {campus.description && <p className="campus-description">{campus.description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;