import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Todo from './components/Todo';
import footerlogo from '../src/images/movie-collage.webp'

function App() {
  return (
    <>
      <Title />
      <div>
      <img className="todo__wrapper" src={footerlogo} alt="" />
      <Todo title="Finish Frontend Simplified"
      paragraph="Code along with Frontend Simplified step by step" />
      </div>
    </>
  );
}

export default App;