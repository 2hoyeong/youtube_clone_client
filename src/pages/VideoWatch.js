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

  return (
    <>
      <Header />
      <VideoView src={`${instance.defaults.baseURL}api/v1/video/view/${videoId}`} />
      <VideoDescDiv>
        <VideoMeta
          title={video.title}
          views={'1971'}
          date={'2020.6.28'}
          profileImg={'https://sample-videos.com/img/Sample-jpg-image-500kb.jpg'}
          uploader={'업로더1'}
        />
      </VideoDescDiv>
    </>
  );
};

const VideoDescDiv = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

export default VideoWatch;
