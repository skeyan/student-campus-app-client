import "./App.css";

// Router
import { Switch, Route, Link } from "react-router-dom";
// Components
import {
  HomePageContainer,
  CampusContainer,
  StudentContainer,
  AllCampusesContainer,
  AllStudentsContainer,
  NewStudentContainer,
  NewCampusContainer,
  EditCampusContainer,
  EditStudentContainer
} from './components/containers';

// if you create separate components for adding/editing
// a student or campus, make sure you add routes to those
// components here

const App = () => {
  return (
    <div>
    {/* Global Navbar */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand navbar-title" to={`/`}>Student-Campus Manager</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={`/`}>Homepage</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/campuses`}>All Campuses</Link>
              </li>
              <li className="nav-item">
               <Link className="nav-link" to={`/students`}>All Students</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Routing Per Page */}
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/newcampus" component={NewCampusContainer} />
        <Route exact path="/campus/:id" component={CampusContainer} />
        <Route exact path="/campus/:id/edit" component={EditCampusContainer} />
        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/newstudent" component={NewStudentContainer} />
        <Route exact path="/student/:id" component={StudentContainer} />
        <Route exact path="/student/:firstname/edit" component={EditStudentContainer} />
      </Switch>
    </div>
  );
}

export default App;
