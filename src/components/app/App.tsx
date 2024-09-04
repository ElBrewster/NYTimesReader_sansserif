import { Route, Routes } from 'react-router-dom';
import styles from "./App.module.css";
import Layout from '../../Layout';
import NoMatch from '../../components/nomatch/NoMatch';
import ArtsPage from '../../components/pages/arts/ArtsPage';
import AutomobilesPage from '../../components/pages/automobiles/AutomobilesPage';
import BooksPage from '../../components/pages/books/BooksPage';
import BusinessPage from '../../components/pages/business/BusinessPage';
import FashionPage from '../../components/pages/fashion/FashionPage';
import FoodPage from '../../components/pages/food/FoodPage';
import HealthPage from '../../components/pages/health/HealthPage';
import HomePage from '../../components/pages/home/HomePage';
import InsiderPage from '../../components/pages/insider/InsiderPage';
import MagazinePage from '../../components/pages/magazine/MagazinePage';
import MoviesPage from '../../components/pages/movies/MoviesPage';
import NYRegionPage from '../../components/pages/nyregion/NYRegionPage';
import ObituariesPage from '../../components/pages/obituaries/ObituariesPage';
import OpinionsPage from '../../components/pages/opinion/OpinionsPage';
import PoliticsPage from '../../components/pages/politics/PoliticsPage';
import RealEstatePage from '../../components/pages/realestate/RealEstatePage';
import SciencePage from '../../components/pages/science/SciencePage';
import SportsPage from '../../components/pages/sports/SportsPage';
import SundayReviewPage from '../../components/pages/sundayreview/SundayReviewPage';
import TechnologyPage from '../../components/pages/technology/TechnologyPage';
import TheaterPage from '../pages/theater/TheaterPage';
import TravelPage from '../../components/pages/travel/TravelPage';
import UpshotPage from '../../components/pages/upshot/UpshotPage';
import USPage from '../../components/pages/us/USPage';
import WorldPage from '../../components/pages/world/WorldPage';

export default function App() {

  return (
    <div className={styles.app}>
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/arts" element={<ArtsPage/>} />
          <Route path="/automobiles" element={<AutomobilesPage />} />
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
          <Route path="/theater" element={<TheaterPage />} />
          <Route path="/travel" element={<TravelPage />} />
          <Route path="/t-magazine" element={<TravelPage />} />
          <Route path="/upshot" element={<UpshotPage />} />
          <Route path="/us" element={<USPage />} />
          <Route path="/world" element={<WorldPage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
 </div>
  )
}


