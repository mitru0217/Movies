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
    <div>
      <h2>Hello</h2>
    </div>
  );
};
