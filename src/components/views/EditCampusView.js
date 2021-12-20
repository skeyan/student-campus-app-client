import "../styles/NewCampus.css";

const EditCampusView = (props) => {
    const { handleChange, handleSubmit, handleFocus, errors } = props;

    return (
        <div className="new-campus-container">
            <div className="add-campus-form-container border">
                <form noValidate className="needs-validation" onSubmit={(e) => handleSubmit(e)}>
                    <h1>Edit Campus</h1>
                    <div className="mb-3">
                        <label className="form-control-label" htmlFor="name">Campus Name*</label>
                        <input name="name" required pattern=".*\S+.*" title="This field cannot be blank."
                            className={"form-control " + (errors.shouldDisplayError ? (errors.name === false ? "is-valid" : "is-invalid") : "")}
                            onChange={(e) => handleChange(e)}
                            onFocus={(e) => handleFocus(e)}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">This field is required.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-control-label" htmlFor="address">Campus Address*</label>
                        <input name="address" required pattern=".*\S+.*" title="This field cannot be blank."
                            className={"form-control " + (errors.shouldDisplayError ? (errors.address === false ? "is-valid" : "is-invalid") : "")}
                            onChange={(e) => handleChange(e)}
                            onFocus={(e) => handleFocus(e)}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">This field is required.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Campus Image Url</label>
                        <input name="imageUrl" className="form-control"
                            onChange={(e) => handleChange(e)}
                            onFocus={(e) => handleFocus(e)}
                        />
                        <div className="form-text">eg. https://site.com/campus.png</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Campus Description</label>
                        <input name="description" className="form-control"
                            onChange={(e) => handleChange(e)}
                            onFocus={(e) => handleFocus(e)}
                        />
                    </div>
                    {errors.validate && <p className="required-text">Invalid inputs, please fix errors.</p>}
                    <button type="submit" className="btn btn-primary">Edit Campus</button>
                </form>
            </div>
        </div>
    )
}

export default EditCampusView;