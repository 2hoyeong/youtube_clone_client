import React from 'react';
import styled from 'styled-components';

const VideoView = ({ src }) => {
  return (
    <>
      <CenterDiv>
        <Video controls preload="metadata">
          <source src={src} type="video/mp4" />
          비디오를 지원하지 않는 브라우저 입니다.
        </Video>
      </CenterDiv>
    </>
  );
};

const Video = styled.video`
  width: 100%;
  max-width: 1278px;
`;

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: #000;
`;

export default VideoView;
