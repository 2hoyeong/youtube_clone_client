import React, { useEffect } from 'react';
import Header from '../templates/Header';
import VideoList from '../templates/VideoList';
import useAsync from '../lib/hooks/useAsync';
import instance from '../lib/apis/instance';

const getRandomVideoList = async () => {
  const response = await instance.get('/api/v1/video/list');
  return response.data;
};

const Main = () => {
  const [videoList, reloadVideoList] = useAsync(getRandomVideoList, [], true);

  useEffect(() => {
    reloadVideoList();
  }, []);

  return (
    <>
      <Header />
      {videoList.data ? (
        <VideoList videoList={videoList.data} />
      ) : (
        <div style={{ textAlign: 'center' }}>업로드된 비디오가 없습니다.</div>
      )}
    </>
  );
};

export default Main;
