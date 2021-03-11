import React from 'react';
import Video from '../components/main/Video';
import styled from 'styled-components';

const VideoList = ({ videoList }) => {
  return (
    <VideoListContainer>
      {videoList.map((video) => {
        return (
          <Video
            key={video.id}
            id={video.id}
            thumbnail={video.thumbnailPath}
            title={video.title}
            uploader={video.uploader}
            views={video.views}
            profileImg={video.profileImg}
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
