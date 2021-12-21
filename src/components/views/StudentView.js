import { Link } from "react-router-dom";
import "../styles/Campus.css"

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
    <div>
      <h2>{student.firstname + " " + student.lastname} is not enrolled at a campus</h2>
      <Link className = "student-add-button" to={`/student/${student.id}/edit`}>
        <button type="button">Edit Student</button>
      </Link>
    </div>
    );
  }

  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h3>{student.firstname + " " + student.lastname + " is a student at " + student.campus.name}</h3>

      <h6>
        <Link to={`/campus/${student.campus.id}`}>
          <button>{student.campus.name} View </button>
        </Link>

        &nbsp;&nbsp;

        <Link to={"/students"}>
        <button onClick={() => deleteHelper(student.id)}>Delete Student</button>
        </Link>

        &nbsp;&nbsp;

        <Link to={`/student/${student.id}/edit`}>
        <button onClick={() => editHelper(student)}>Edit Student</button>
        </Link>


      </h6>

    </div>
  );

};

export default StudentView;