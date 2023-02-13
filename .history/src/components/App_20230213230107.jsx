import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
const Home = lazy(() => import('../pages/Home/Home'));
const Library = lazy(() => import('../pages/Library/Library'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const SingleMovie = lazy(() => import('../pages/SingleMovie/SingleMovie'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />
      <Route path="library" element={<Library />} />
      <Route path="movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<SingleMovie />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
