import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        This is home
      </Route>
      <Route exact path='/starred'>
        This is starred
      </Route>
      <Route>
        This is a 404 page
      </Route>
    </Switch>
  );
}

export default App;