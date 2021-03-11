import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Video = ({ id, thumbnail, title, uploader, views, profileImg }) => {
  return (
    <VideoContainer>
      <Link to={`/watch/${id}`}>
        <VideoThumbnail src={thumbnail} />
        <VideoDescDiv>
          <CircleDiv>
            <ProfileImg src={profileImg} />
          </CircleDiv>
          <MetaDataDiv>
            <TitleDiv>{title}</TitleDiv>
            <UploaderDiv>{uploader}</UploaderDiv>
            <ViewsDiv>조회수 {views}회</ViewsDiv>
          </MetaDataDiv>
        </VideoDescDiv>
      </Link>
    </VideoContainer>
  );
};

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 8px;
  margin-bottom: 40px;
`;

const MetaDataDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoThumbnail = styled.img`
  width: 359.984px;
  height: 201.984px;
`;

const TitleDiv = styled.div`
  margin-top: 12px;
  font-size: 1.17em;
  font-weight: bold;
  color: rgb(3, 3, 3);
`;

const UploaderDiv = styled.div`
  color: #606060;
`;

const ViewsDiv = styled.div`
  color: #606060;
`;

const VideoDescDiv = styled.div`
  display: flex;
`;

const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
`;

const CircleDiv = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  margin: 12px 12px 0 0;
`;

export default Video;
