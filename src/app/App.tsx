import { Route, Routes, useLocation } from 'react-router-dom';
import styles from "./App.module.css";
import Layout from '../Layout';
import NoMatch from '../nomatch/NoMatch';
import MyModal from '../modal/Modal';
import ArtsPage from '../pages/arts/ArtsPage';
import AutomobilesPage from '../pages/automobiles/AutomobilesPage';
import BooksPage from '../pages/books/BooksPage';
import BusinessPage from '../pages/business/BusinessPage';
import FashionPage from '../pages/fashion/FashionPage';
import FoodPage from '../pages/food/FoodPage';
import HealthPage from '../pages/health/HealthPage';
import HomePage from '../pages/home/HomePage';
import InsiderPage from '../pages/insider/InsiderPage';
import MagazinePage from '../pages/magazine/MagazinePage';
import MoviesPage from '../pages/movies/MoviesPage';
import NYRegionPage from '../pages/nyregion/NYRegionPage';
import ObituariesPage from '../pages/obituaries/ObituariesPage';
import OpinionsPage from '../pages/opinion/OpinionsPage';
import PoliticsPage from '../pages/politics/PoliticsPage';
import RealEstatePage from '../pages/realestate/RealEstatePage';
import SciencePage from '../pages/science/SciencePage';
import SportsPage from '../pages/sports/SportsPage';
import SundayReviewPage from '../pages/sundayreview/SundayReviewPage';
import TechnologyPage from '../pages/technology/TechnologyPage';
import TravelPage from '../pages/travel/TravelPage';
import UpshotPage from '../pages/upshot/UpshotPage';
import USPage from '../pages/us/USPage';
import WorldPage from '../pages/world/WorldPage';

export default function App() {
  let location = useLocation();
  let state = location.state as { backgroundLocation?: Location };

  return (
    <div className={styles.app}>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Layout/>}>
          <Route index path="/home" element={<HomePage />} />
          <Route path="/arts" element={<ArtsPage/>} />
          <Route path="/automobiles" element={<AutomobilesPage/>} />
          <Route path="/books" element={<BooksPage/>} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/fashion" element={<FashionPage/>} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/health" element={<HealthPage />} />
          <Route path="/insider" element={<InsiderPage />} />
          <Route path="/magazine" element={<MagazinePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/nyregion" element={<NYRegionPage />} />
          <Route path="/obituaries" element={<ObituariesPage />} />
          <Route path="/opinion" element={<OpinionsPage />} />
          <Route path="/politics" element={<PoliticsPage />} />
          <Route path="/realestate" element={<RealEstatePage />} />
          <Route path="/science" element={<SciencePage />} />
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/sundayreview" element={<SundayReviewPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/travel" element={<TravelPage />} />
          <Route path="/t-magazine" element={<TravelPage />} />
          <Route path="/upshot" element={<UpshotPage />} />
          <Route path="/us" element={<USPage />} />
          <Route path="/world" element={<WorldPage />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/:section/:title" element={<MyModal/>}/>
        </Route>
      </Routes>
 </div>
  )
}


