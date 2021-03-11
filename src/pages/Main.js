import React from 'react';
import Header from '../templates/Header';
import VideoList from '../templates/VideoList';

const Main = () => {
  return (
    <>
      <Header />
      <VideoList videoList={TestVideo} />
    </>
  );
};

export default Main;
