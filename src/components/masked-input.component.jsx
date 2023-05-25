const MaskedInput = ({ value, onChange, onBlur, onFocus }) => {

    return (
        <div className="MaskedInput">
            <input type="text" maxLength="16" value={value} onChange={onChange} onBlur={onBlur} onFocus={onFocus} />
        </div>
    );
}

export default MaskedInput;