import DefaultLayout from './layouts/DefaultLayout.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import MoviePage from './pages/MoviePage.jsx';
import CreateMoviePage from './pages/CreateMoviePage.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            {/* qui vanno le pagine */}
            <Route path="/" Component={HomePage} />
            <Route path="/movies/:id" Component={MoviePage} />
            <Route path='/movies/create' Component={CreateMoviePage}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;