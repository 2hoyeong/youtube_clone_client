import React from 'react';
import Header from '../templates/Header';
import instance from '../lib/apis/instance';
import useAsync from '../lib/hooks/useAsync';
import { useEffect } from 'react';
import VideoView from '../components/videowatch/VideoView';
import styled from 'styled-components';
import VideoMeta from '../components/videowatch/VideoMeta';

const getVideo = (id) => async () => {
  const response = await instance.get(`/api/v1/video/${id}`);
  return response.data;
};

const VideoWatch = ({ match }) => {
  const { videoId } = match.params;
  const [video, reloadVideo] = useAsync(getVideo(videoId), [], true);

  useEffect(() => {
    reloadVideo();
  }, []);

  useEffect(() => {
    if (video.error) {
      window.alert('비디오를 찾을 수 없습니다.');
      window.location = '/';
    }
  }, [video.error]);
  console.log(video);
  return (
    <>
      <Header />
      {video.data ? (
        <>
          <VideoView src={`${instance.defaults.baseURL}api/v1/video/view/${videoId}`} />
          <VideoDescDiv>
            <VideoMeta
              title={video.data.title}
              views={video.data.views}
              date={video.data.createdDate}
              profileImg={video.data.profileImage}
              uploader={video.data.name}
            />
          </VideoDescDiv>
        </>
      ) : (
        <div>비디오를 불러오는 중 입니다.</div>
      )}
    </>
  );
};

const VideoDescDiv = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

export default VideoWatch;
