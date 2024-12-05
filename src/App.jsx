import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Todo from './components/Todo';
import footerlogo from '../src/images/movie-collage.webp'
import Movies from './Pages/Movies';

function App() {
  return (
    <>
      <Title />
      <div>
      <img className="todo__wrapper" src={footerlogo} alt="" />
      <Movies />
      </div>
    </>
  );
}

export default App;