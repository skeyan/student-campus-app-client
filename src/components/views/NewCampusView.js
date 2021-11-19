import "../styles/NewCampus.css";

const NewCampusView = (props) => {
    const {handleChange, handleSubmit, nameError, addressError, validateError } = props;

    return (
        <div className="new-campus-container">
            <div className="add-campus-form-container border">
                <form onSubmit= {(e) => handleSubmit(e)}>
                    <h1>Add Campus</h1>
                    <div className="mb-3">
                        <label className="form-label">Campus Name</label>
                        <input name="name" className={"form-control " + (nameError == true ? "invalid-text" : "")} required onChange = {(e) => handleChange(e)}/>
                        <div className="form-text">Required</div>
                        { nameError && <p className="required-text">Name cannot be blank.</p>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Campus Address</label>
                        <input name="address" className={"form-control " + (addressError == true ? "invalid-text" : "")} required onChange = {(e) => handleChange(e)}/>
                        <div className="form-text">Required</div>
                        { addressError && <p className="required-text">Address cannot be blank.</p>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Campus Image Url</label>
                        <input name="imageUrl" className="form-control" onChange = {(e) => handleChange(e)}/>
                        <div className="form-text">eg. https://site.com/campus.png</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Campus Description</label>
                        <input name="description" className="form-control" onChange = {(e) => handleChange(e)}/>
                    </div>
                    { validateError && <p className="required-text">Invalid inputs, please fix errors.</p>}
                    <button type="submit" className="btn btn-primary">Add Campus</button>
                </form>
            </div>
        </div>
    )
}

export default NewCampusView;