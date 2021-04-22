import React from 'react';
import styled from 'styled-components';
import BlueButton from '../components/common/BlueButton';
import UploadFile from '../components/videoupload/UploadFile';
const VideoUpload = ({ onChangedFile, onClickUploadButton }) => {
  return (
    <MaxDiv>
      <FlexDiv>
        <UploadFile onChange={onChangedFile} />
        <BlueButton text={'업로드하기'} onClick={onClickUploadButton} />
      </FlexDiv>
    </MaxDiv>
  );
};

const MaxDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  & > * {
    margin: 10px 0;
  }
`;

export default VideoUpload;
