import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favorites";
import Layout from './components/layout/Layout';


function App() {
  // domain is: localhost: 3000/favourites
  // after deployment domain is: my-page.com

  return (
    <Layout> 
      <Routes>
        <Route path="/" exact element={<AllMeetupsPage />} />

        <Route path="/new-meetup" element={<NewMeetupPage />} />

        <Route path="/favorites" element={<FavouritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
