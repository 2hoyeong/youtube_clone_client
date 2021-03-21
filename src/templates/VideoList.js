import React from 'react';
import Video from '../components/main/Video';
import styled from 'styled-components';
import instance from '../lib/apis/instance';

const VideoList = ({ videoList }) => {
  return (
    <VideoListContainer>
      {videoList.map((video) => {
        return (
          <Video
            key={video.id}
            id={video.id}
            thumbnail={`${instance.defaults.baseURL}api/v1/video/${video.id}/thumbnail`}
            title={video.title}
            uploader={video.uploader}
            views={video.views}
            profileImg={`${instance.defaults.baseURL}api/v1/user/profileImage/${video.profileImage}`}
          />
        );
      })}
    </VideoListContainer>
  );
};

const VideoListContainer = styled.div`
  display: inline-flex;
  margin-top: 24px;
  justify-content: flex-start;
`;

export default VideoList;
