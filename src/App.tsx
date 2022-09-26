import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';
import './assets/scss/global.scss';
import PageLayout from 'layouts/PageLayout';
import Home from 'entities/Home';
import MainSearch from 'entities/Search';
import Settings from 'entities/Settings';

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<MainSearch />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
