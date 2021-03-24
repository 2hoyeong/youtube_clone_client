import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import { GlobalStyle } from './GlobalStyle';
import VideoWatch from './pages/VideoWatch';
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/watch/:videoId" component={VideoWatch} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
