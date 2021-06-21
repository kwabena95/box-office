import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Starred from './pages/Starred';


function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/starred'>
          <Starred />
        </Route>
        <Route>
          <div>Not Found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
