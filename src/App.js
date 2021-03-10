import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </>
  );
};

export default App;
