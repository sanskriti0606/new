import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import TvSeries from './Pages/TvSeries';
import BookMark from './Pages/BookMark';
import LogIn from './Pages/LogIn';
import DetailsPage from './Components/DetailsPage';
import MultiSearch from './Pages/MultiSearch';
// import NavBar from './Components/NavBar';
// import SearchBar from './Components/SearchBar';
import SignUp from './Pages/SignUp';
import { Toaster } from 'react-hot-toast';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isSignUpPage = location.pathname === '/signup';
  const isDetailsPage = location.pathname.includes('/detail');

  return (
    <div className='lg:flex bg-leanBlue w-full h-full'>
      {!isLoginPage && !isSignUpPage && !isDetailsPage && <NavBar />}
      <div className='w-full h-full bg-leanBlue'>
        {!isLoginPage && !isSignUpPage && !isDetailsPage && <SearchBar />}
        <Toaster
          position="top-right" 
          reverseOrder={false} 
          gutter={8}
        />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/movies' element={<Movies />} /> */}
          {/* <Route path='/tvseries' element={<TvSeries />} /> */}
          {/* <Route path='/bookmark' element={<BookMark />} /> */}
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/detail" element={<DetailsPage />} />
          {/* <Route path="/search/multi" element={<MultiSearch />} /> */}
          {/* <Route path="/search/movies" element={<MultiSearch />} /> */}
          {/* <Route path="/search/tvseries" element={<MultiSearch />} /> */}
          {/* <Route path="/search/bookmark" element={<MultiSearch />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;