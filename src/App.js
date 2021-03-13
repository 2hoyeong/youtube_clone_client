import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import { GlobalStyle } from './GlobalStyle';
import VideoWatch from './pages/VideoWatch';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/watch/:videoId" component={VideoWatch} />
      </Switch>
    </>
  );
};

export default App;
