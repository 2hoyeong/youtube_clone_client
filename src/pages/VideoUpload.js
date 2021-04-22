import React, { useState, useEffect } from 'react';
import Header from '../templates/Header';
import VideoUploadForm from '../templates/VideoUploadForm';
import instance from '../lib/apis/instance';
import useAsync from '../lib/hooks/useAsync';

const requestUploadVideo = (file) => async () => {
  const formData = new FormData();
  formData.append('content', file);
  const response = await instance.post('/api/v1/video/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data, boundary=${form._boundary}' },
  });
  return response.data;
};

const VideoUpload = () => {
  const [file, setFile] = useState(null);
  const [video, uploadVideo] = useAsync(requestUploadVideo(file), []);

  const onChangedFile = ({ target }) => {
    setFile(target.files[0]);
  };

  const onClickUploadButton = () => {
    uploadVideo();
  };

  useEffect(() => {
    if (video.data?.videoId) {
      window.location = `/upload/${video.data.videoId}`;
    }
  }, [video.data]);

  return (
    <>
      <Header />
      <VideoUploadForm onChangedFile={onChangedFile} onClickUploadButton={onClickUploadButton} />
    </>
  );
};

export default VideoUpload;
