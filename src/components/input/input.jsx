
const InputText = (props) => {

    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text">{props.label}</span>
            </label>
            <input 
            type="text" 
            placeholder={props.placeholder} 
            className="input input-bordered login"
           
            />
        </div>

    )
}

export default InputText