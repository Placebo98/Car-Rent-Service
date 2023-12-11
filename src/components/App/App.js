import { Header } from 'components/Header/header';
import CatalogPage from 'pages/catalogPage';
import FavoritesPage from 'pages/favoritesPage';
import HomePage from 'pages/homePage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Header />
      <hr />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </div>
  );
};
