import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from './pages/MainPage';
import SampleTestPage from './pages/SampleTestPage';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/sampletest" component={SampleTestPage} />
    </Switch>
  );
};

export default App;
