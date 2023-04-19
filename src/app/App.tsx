import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { nanoid } from 'nanoid';

import styles from "./App.module.css";

import Article from '../article/Article';
import Layout from '../layout/Layout';
import BusinessPage from '../pages/business/BusinessPage';
import FoodPage from '../pages/food/FoodPage';
import OpinionsPage from '../pages/opinion/OpinionsPage';
import TopStoriesPage from '../pages/topstories/TopStoriesPage';


export default function App() {
  // const [myTopStories, setMyTopStories] = useState([]);
   
  // useEffect(() => {
  //   fetch("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=3zPvKXZK3DW8O5MVU3GWnrCueyAt01jE")
  //   .then(res => res.json())
  //   .then(data=> setMyTopStories(data.results))
  // }, [myTopStories])
  
  // const topStories = myTopStories.map(article => {
  //   let id = nanoid();
  //   return <Article key={id} article={article}/>;
  // })
  
  return (
    <div className={styles.app}>
    {/* <Routes location={state?.backgroundLocation || location}></Routes> */}
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/topstories" element={<TopStoriesPage />}></Route>
          <Route path="/opinion" element={<OpinionsPage />}></Route>
          <Route path="/business" element={<BusinessPage />}></Route>
          <Route path="/food" element={<FoodPage />}></Route>
        </Route>
      </Routes>
    <div>
      {/* {topStories} */}
    </div>
 </div>
  )
}


