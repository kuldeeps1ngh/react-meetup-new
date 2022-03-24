import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavouritesPage from './pages/Fovourites';
import Layout from './components/layout/Layout';

function App() {
  return <Layout>
    <Switch>
      <Route path='/' exact>
        <AllMeetupsPage />
      </Route>
      <Route path='/new-meetup'>
        <NewMeetupPage />
      </Route>
      <Route path='/favorites'>
        <FavouritesPage />
      </Route>
    </Switch>
  </Layout>;
}

export default App;
