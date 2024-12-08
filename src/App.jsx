import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Todo from './components/Todo';
import footerlogo from '../src/images/movie-collage.webp';
import Movies from './Pages/Movies';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieDetails } from './Pages/MovieDetails';
import MainHead from './components/MainHead';

function App() {
  return (
    <>
    <MainHead />
      <Router>
        <Routes>
          <Route path='/:id' element={<MovieDetails/>}>
          </Route>
          <Route path='/' element={<Todo/>}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;