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
  NewStudentContainer
} from './components/containers';

// if you create separate components for adding/editing
// a student or campus, make sure you add routes to those
// components here

const App = () => {
  return (
    <div>
    {/* Global Navbar */}
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <Link class="navbar-brand navbar-title" to={`/`}>Student-Campus Manager</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" to={`/`}>Homepage</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={`/campuses`}>All Campuses</Link>
              </li>
              <li class="nav-item">
               <Link class="nav-link" to={`/students`}>All Students</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Routing Per Page */}
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/campus/:id" component={CampusContainer} />
        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/newstudent" component={NewStudentContainer} />
        <Route exact path="/student/:id" component={StudentContainer} />
      </Switch>
    </div>
  );
}

export default App;
