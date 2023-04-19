import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { nanoid } from 'nanoid';

import styles from "./App.module.css";

import Article from '../article/Article';



export default function App() {
  const [myTopStories, setMyTopStories] = useState([]);
   
  useEffect(() => {
    fetch("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=3zPvKXZK3DW8O5MVU3GWnrCueyAt01jE")
    .then(res => res.json())
    .then(data=> setMyTopStories(data.results))
  }, [myTopStories])
  
  const topStories = myTopStories.map(article => {
    let id = nanoid();
    return <Article key={id} article={article}/>;
  })
  
  return (
    <div className="App">
          {topStories}
    </div>
  )
}


