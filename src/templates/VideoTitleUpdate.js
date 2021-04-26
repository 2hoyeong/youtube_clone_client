import React from 'react';
import VideoTitleInput from '../components/videodescript/VideoTitleInput';
import BlueButton from '../components/common/BlueButton';

const VideoTitleUpdate = ({ onChange, onClickUpdateButton }) => {
  return (
    <div>
      <VideoTitleInput onChange={onChange} />
      <BlueButton text={'제목 수정'} onClick={onClickUpdateButton} />
    </div>
  );
};

export default VideoTitleUpdate;
