import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { nanoid } from 'nanoid';

import styles from "./App.module.css";

import Article from '../article/Article';
import Layout from '../layout/Layout';
import Modal from '../modal/Modal';
import BusinessPage from '../pages/business/BusinessPage';
import FoodPage from '../pages/food/FoodPage';
import OpinionsPage from '../pages/opinion/OpinionsPage';
import TopStoriesPage from '../pages/topstories/TopStoriesPage';


export default function App() {
  let location = useLocation();
  let state = location.state as { backgroundLocation?: Location };
  
  return (
    <div className={styles.app}>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Layout/>}>
          <Route path="/topstories" element={<TopStoriesPage />}></Route>
          <Route path="/opinion" element={<OpinionsPage />}></Route>
          <Route path="/business" element={<BusinessPage />}></Route>
          <Route path="/food" element={<FoodPage />}></Route>
        </Route>
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path="" element={<Modal />}/>
        </Routes>
      )}
 </div>
  )
}


