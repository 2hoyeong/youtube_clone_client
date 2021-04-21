import React from 'react';

const UploadFile = ({ onChange }) => {
  return (
    <>
      <input type={'file'} onChange={onChange} />
    </>
  );
};

export default UploadFile;
