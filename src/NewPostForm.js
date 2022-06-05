import "./NewPostForm.css";

// Creating a new post
const NewPostForm = (props) => {

    const {label, onChange, id, ...inputProps} = props;

    return (
        <div className="newPostInput">
            <label>{label}</label>

            <input {...inputProps} onChange={onChange} />
        </div>
    )
}

export default NewPostForm;