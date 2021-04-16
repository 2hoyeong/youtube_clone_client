import React, { useEffect } from 'react';

const NotFoundPage = () => {
  useEffect(() => {
    (async () => {
      setTimeout(() => {
        window.location = '/';
      }, 1000);
    })();
  }, []);
  return <div>페이지를 찾을 수 없습니다. 1초 뒤 메인화면으로 이동합니다.</div>;
};

export default NotFoundPage;
