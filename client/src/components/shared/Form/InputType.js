import React from "react";


function InputType ({
  labelFor,
  labelText,
  inputType,
  value,
  onchange,
  name,
})  {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={labelFor} className="form-label">
          {labelText}
        </label>
        <input
          type={inputType}
          className="form-control"
          name={name}
          value={value}
          onChange={onchange}
        />
      </div>
    </>
  );
};

export default InputType;
