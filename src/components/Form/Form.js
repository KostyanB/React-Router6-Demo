import { useState, useEffect } from 'react';

const Form = ({
  inputName,
  inputType = 'text',
  initInput,
  btnText = 'Submit',
  labelText,
  handleForm,
  children,
  ...otherProps
}) => {
  const [inputValue, setInputValue] = useState(initInput);

  useEffect(() => setInputValue(initInput || ''), [initInput]);

  const handleSubmit = e => {
    e.preventDefault();
    handleForm(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {labelText && <label htmlFor={inputName}>{labelText}</label>}
      <input
        type={inputType}
        name={inputName}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      {children}
      <input type='submit' value={btnText} />
    </form>
  );
};
export default Form;
