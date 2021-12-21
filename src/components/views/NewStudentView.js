import "../styles/NewStudent.css";
import { useState } from 'react';


const NewStudentView = (props) => {
  const {handleChange, handleSubmit, handleFocus, errors } = props;
  const [gpaError, setGpaError]=useState(false)

  return (

    <div className="new-student-container">
            <div className="add-student-form-container border">
                <form noValidate className="needs-validation" onSubmit= {(e) => handleSubmit(e)}>
                    <h1>Add Student</h1>
                    <div className="mb-3">
                        <label className="form-control-label" htmlFor="name">First Name*</label>
                        <input name="firstname" required pattern=".*\S+.*" title="This field cannot be blank."
                            className={"form-control " + (errors.shouldDisplayError ? (errors.firstname === false ? "is-valid" : "is-invalid") : "")}
                            onChange = {(e) => handleChange(e)}
                            onFocus = {(e) => handleFocus(e)}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">This field is required.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-control-label" htmlFor="name">Last Name*</label>
                        <input name="lastname" required pattern=".*\S+.*" title="This field cannot be blank."
                            className={"form-control " + (errors.shouldDisplayError ? (errors.lastname === false ? "is-valid" : "is-invalid") : "")}
                            onChange = {(e) => handleChange(e)}
                            onFocus = {(e) => handleFocus(e)}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">This field is required.</div>
                    </div>

                    <div className="mb-3">
                        <label className="form-control-label" htmlFor="address">Email*</label>
                        <input name="email" required pattern=".*\S+.*" title="This field cannot be blank."
                            className={"form-control " + (errors.shouldDisplayError ? (errors.email === false ? "is-valid" : "is-invalid") : "")}
                            onChange = {(e) => handleChange(e)}
                            onFocus = {(e) => handleFocus(e)}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">This field is required.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Campus ID</label>
                        <select name="campuses" id="selectList">
                          <option value="1">Hunter</option>
                          <option value="2">MIT</option>
                          <option value="3">Harvard</option>
                        </select>
                        {/* <input name="campusId" className="form-control"
                            onChange = {(e) => handleChange(e)}
                            onFocus = {(e) => handleFocus(e)}
                        /> */}
                    </div>
                    { errors.validate && <p className="required-text">Invalid inputs, please fix errors.</p>}
                    <div className="mb-3">
                        <label className="form-label">Student Image Url</label>
                        <input name="imageUrl" className="form-control"
                            onChange = {(e) => handleChange(e)}
                            onFocus = {(e) => handleFocus(e)}
                        />
                        <div className="form-text">eg. https://site.com/student.png</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">GPA</label>
                        <input name="gpa" className="form-control"
                            onChange = {(e) => handleChange(e)}
                            onFocus = {(e) => handleFocus(e)}
                            onBlur={(e) => {
                              if(e.target.value<0||e.target.value>4){
                                setGpaError(true)
                              }
                            }}
                            />
                    </div>
                    {gpaError && <div className="error">GPA must be between 0.0 and 4.0</div>}
                    <button type="submit" className="btn btn-primary">Add Student</button>
                </form>
            </div>
        </div>
  )
}

export default NewStudentView;