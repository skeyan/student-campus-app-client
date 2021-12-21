import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import SchoolIcon from '@material-ui/icons/School';

import "../styles/Student.css"

const StudentView = (props) => {
  const { student, deleteStudent, editStudent} = props;

  const deleteHelper = (studentID) => {
    deleteStudent(studentID);
    <Link to={"/students"}></Link>
  }

  const editHelper = (student) => {
    editStudent(student);
    <Link to={`/student/${student.id}/edit`}></Link>
  }

  if (student.campus === null) {
    return (
    <div className="student-container">
      <div className="student-content-container">
      <img src={student.imageUrl} className="student-img-top" alt="student img" />
      <br></br>
      <h2>{student.firstname + " " + student.lastname} is not enrolled at a campus</h2>
      <Link to={`/student/${student.id}/edit`} className="noCampus-student-nav-button">
          <Button onClick={() => editHelper(student)}>
            <EditIcon />
          </Button>
      </Link>
      <Link to={"/students"} className="noCampus-student-nav-button">
          <Button onClick={() => deleteHelper(student.id)}>
            <DeleteIcon />
          </Button>
      </Link>
      </div>
      
    </div>
    );
  }

  return (
    <div className="student-container">
      <div className=".student-content-container">
      <img src={student.imageUrl} className="student-img-top" alt="student img" />
      <br></br>
      <Link to={"/students"} className="student-nav-button">
          <Button onClick={() => deleteHelper(student.id)}>
            <DeleteIcon />
          </Button>
      </Link>

      <Link to={`/student/${student.id}/edit`} className="student-nav-button">
          <Button onClick={() => editHelper(student)}>
            <EditIcon />
          </Button>
      </Link>

      <Link to={`/campus/${student.campus.id}`} className="student-nav-button">
          <Button>
            <SchoolIcon />
          </Button>
      </Link>

      <h1>{student.firstname+" " +student.lastname}</h1>
      <p>GPA: {student.gpa}</p>
      <p>{student.email}</p>
      <p>{student.firstname+" " +student.lastname+" is a student at "+ student.campus.name}</p>


      </div>

    </div>
  );

};

export default StudentView;


// <h2>{student.firstname + " " + student.lastname} is not enrolled at a campus</h2>
//       <Link className = "student-add-button" to={`/student/${student.id}/edit`}>
//         <button type="button">Edit Student</button>
//       </Link>

// <h1>{student.firstname + " " + student.lastname}</h1>
// <h3>{student.firstname + " " + student.lastname + " is a student at " + student.campus.name}</h3>

// <h6>
//   <Link to={`/campus/${student.campus.id}`}>
//     <button>{student.campus.name} View </button>
//   </Link>

//   &nbsp;&nbsp;

//   <Link to={"/students"}>
//   <button onClick={() => deleteHelper(student.id)}>Delete Student</button>
//   </Link>

//   &nbsp;&nbsp;

//   <Link to={`/student/${student.id}/edit`}>
//   <button onClick={() => editHelper(student)}>Edit Student</button>
//   </Link>


// </h6>