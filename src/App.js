import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import ShowDetail from './pages/ShowDetail';
import { ThemeProvider } from 'styled-components';


const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/starred'>
          <Starred />
        </Route>
        <Route exact path='/show/:id'>
          <ShowDetail />
        </Route>
        <Route>
          <div>Not Found</div>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
