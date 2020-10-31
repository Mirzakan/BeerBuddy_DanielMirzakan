import BrowsePage from './Pages/BrowsePage';
import FavoritePage from './Pages/FavoritePage';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (

    <Router>
    <Switch>

      <Route exact path='/'>
        <NavBar />
        <BrowsePage/>
      </Route>

      <Route path='/favorite_beers'>
        <NavBar />
        <FavoritePage/>
      </Route>

    </Switch>
  </Router>

  );
}
//setPage(page + 1)
export default App;
