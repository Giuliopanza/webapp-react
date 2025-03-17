import DefaultLayout from './layouts/DefaultLayout';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import MoviePage from './components/pages/MoviePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            {/* qui vanno le pagine */}
            <Route path="/" Component={HomePage} />
            <Route path="/movies/:id" Component={MoviePage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;