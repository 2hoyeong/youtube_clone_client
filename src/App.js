import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import { GlobalStyle } from './GlobalStyle';
import VideoWatch from './pages/VideoWatch';
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';
import Regist from './pages/Regist';
import VideoUpload from './pages/VideoUpload';
import VideoDescript from './pages/VideoDescript';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/watch/:videoId" component={VideoWatch} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/regist" component={Regist} />
        <Route exact path="/upload" component={VideoUpload} />
        <Route exact path="/upload/:videoId" component={VideoDescript} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
