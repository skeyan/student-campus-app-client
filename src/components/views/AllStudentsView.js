import { Link } from "react-router-dom";
import "../styles/AllStudents.css";

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const AllStudentsView = (props) => {
  const {students, deleteStudent} = props;

  if (!students.length) {
    return (
    <div>
      <p>There are no students.</p>
      <Link to={`/newstudent`}>
        <button className="btn btn-primary">Add New Student</button>
      </Link>
    </div>
    );
  }

  return (
    <div className="container">
    <Link className="student-add-button" to={`/newstudent`}>
      <button type="button" className="btn btn-primary">+ Add Student</button>
    </Link>
    <div className="student-container">
      {props.students.map((student) => (
        <div key={student.id} className="card student">
          <img src={student.imageUrl} className="card-img-top" alt="student id"/>
          <div className="card-body">
            <Button onClick={() => props.deleteStudent(student.id)} className="student-nav-button">
              <DeleteIcon />
            </Button>
            <Link to={`/student/${student.id}`}>
              <h1 className="card-title">{student.firstname + " " + student.lastname}</h1>
            </Link>
            <p className="card-text">{student.email}</p>
            {student.gpa && <p className="student-gpa">{"GPA: " + student.gpa}</p>}
          </div>
        </div>
      ))}
    </div>
  </div>
  
  // <div>
  //   {students.map((student) => {
  //     let name = student.firstname + " " + student.lastname;
  //     return (
  //       <div key={student.id}>
  //       <Link to={`/student/${student.id}`}>
  //         <h1>{name}</h1>
  //       </Link>
  //       <button onClick={() => deleteStudent(student.id)}>Delete</button>
  //       </div>
  //     );
  //   }
  //   )}
  // </div>
  );
};


export default AllStudentsView;