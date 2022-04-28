import logo from './logo.svg';
import './App.css';
import TodoFeature from './features/Todo/pages';
import AlbumFeature from './features/Album/pages';

function App() {
  return (
    <div className="App">
      <TodoFeature />
      {/* <AlbumFeature /> */}
    </div>
  );
}

export default App;
