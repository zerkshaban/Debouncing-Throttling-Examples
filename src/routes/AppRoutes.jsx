import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainScreenLayout from '../Layout/MainScreenLayout/MainScreenLayout';

import DebouncingExamplePage from '../Pages/DebouncingExamplePage/DebouncingExamplePage';
import ThrottlingExamplePage from '../Pages/ThrottlingExamplePage/ThrottlingExamplePage';
import NotFound from '../Pages/NotFound/NotFound';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <MainScreenLayout>
                <DebouncingExamplePage />
              </MainScreenLayout>
            </>
          }
        />
        <Route
          path='/throttling'
          element={
            <MainScreenLayout>
              <ThrottlingExamplePage />
            </MainScreenLayout>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
