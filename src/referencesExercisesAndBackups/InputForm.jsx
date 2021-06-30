import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useInput } from '../hooks/useInput';

const Form = ({ close, label, variable, ...rest }) => {
  const [submitted, setSubmitted] = useState(null);
  const [variable, setVariable] = useLocalStorage(variable, null);
  const { value, bind, reset } = useInput('');

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Recording ' + variable + ' to window.localStorage: ' + value);
    setSubmitted(true);
    setVariable(value);
    reset();
    if (close) {
      close();
    }
  };

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit}>
        <label>
          <div className="mb-3">{label}:</div>
          <div className="mb-3">
            <Input
              type="text"
              size="80"
              wrap="hard"
              value={value}
              placeholder={`Enter ${variable} here`}
              {...bind}
            />
          </div>
        </label>
        <div className="mt-3">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
      {showConfirmation && (
        <p className="mt-3 text-danger">
          {label} submitted: {variable || `no ${variable} submitted yet`}
        </p>
      )}
    </div>
  );
};

export default Form;
