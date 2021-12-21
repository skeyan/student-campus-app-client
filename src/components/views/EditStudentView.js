import "../styles/NewStudent.css";

const EditStudentView = (props) => {
    const {handleSelect, handleChange, handleSubmit, handleFocus, errors} = props;
    let optionItems = props.allCampuses.map((campus) =>

        <option key={campus.id} value={campus.id}>{campus.name}</option>
    );
    return(
        <div className="new-student-container">
        <div className="add-student-form-container border">
            <form noValidate className="needs-validation" onSubmit= {(e) => handleSubmit(e)}>
                <h1>Edit Student</h1>
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
                        <select name="campuses" id="selectList" onChange = {(e) => handleSelect(e)}>
                          <option key="-1" value="-1">None</option>
                          {optionItems}
                       </select>
                        {/* <input name="campusId" className="form-control"
                            onChange = {(e) => handleChange(e)}
                            onFocus = {(e) => handleFocus(e)}
                        /> */}
                    </div>
                    {/* { errors.validate && <p className="required-text">Invalid inputs, please fix errors.</p>} */}
                <div className="mb-3">
                    <label className="form-label">Student Image Url</label>
                    <input name="imageUrl" className="form-control"
                        onChange = {(e) => handleChange(e)}
                        onFocus = {(e) => handleFocus(e)}
                    />
                    <div className="form-text">eg. https://site.com/student.png</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">GPA (0.0 - 4.0)</label>
                    <input name="gpa" className="form-control"
                        onChange = {(e) => handleChange(e)}
                        onFocus = {(e) => handleFocus(e)}
                    />
                </div>
                { errors.validate && <p className="required-text">Invalid inputs, please fix errors.</p>}
                <button type="submit" className="btn btn-primary">Edit Student</button>
            </form>
        </div>
    </div>
)
}

export default EditStudentView;