import React from 'react';

const VideoTitleInput = ({ onChange }) => {
  return (
    <>
      <input onChange={onChange} placeholder={'영상의 제목을 입력하세요.'} />
    </>
  );
};

export default VideoTitleInput;
