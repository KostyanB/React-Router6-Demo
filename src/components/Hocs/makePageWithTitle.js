import { Fragment } from 'react';

const makePageWithTitle = (Page = <Fragment />, data) => {
  const { title, displayName, ...otherProps } = data;

  const Wrapper = () => {
    return (
      <div>
        <h1>{title}</h1>
        <Page {...otherProps} />
      </div>
    );
  };
  // Wrapper.displayName = displayName;

  return Wrapper;
};

export default makePageWithTitle;
