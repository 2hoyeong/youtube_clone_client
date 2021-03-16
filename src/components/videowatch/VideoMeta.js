import React from 'react';
import styled from 'styled-components';
import instance from '../../lib/apis/instance';

const VideoMeta = ({ title, views, date, profileImg, uploader }) => {
  return (
    <Container>
      <div>
        <TitleDiv>{title ? title : '-'}</TitleDiv>
        <MetaDiv>
          조회수 {views}회 • {date}
        </MetaDiv>
      </div>
      <FlexDiv>
        <CircleDiv>
          <ProfileImg src={`${instance.defaults.baseURL}api/v1/user/profileImage/${profileImg}`} />
        </CircleDiv>
        <UploaderDiv>{uploader}</UploaderDiv>
      </FlexDiv>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleDiv = styled.div`
  color: #030303;
  font-size: 18px;
  font-weight: 400;
`;

const MetaDiv = styled.div`
  color: #606060;
  font-size: 14px;
`;

const CircleDiv = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 12px;
`;

const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
`;

const UploaderDiv = styled.div`
  color: #606060;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

export default VideoMeta;
