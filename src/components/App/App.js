// import { Header } from 'components/Header/header';
import CatalogPage from 'pages/catalogPage';
import FavoritesPage from 'pages/favoritesPage';
import HomePage from 'pages/homePage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Navigate } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
