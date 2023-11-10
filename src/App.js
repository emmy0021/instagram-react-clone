import './App.css';
import Suggestions from './components/Suggestions/suggestions';
import Navigation from './components/Navigation/navigation';
import Feed from './components/Feed/feed';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Feed />
      <Suggestions />
    </div>
  );
}

export default App;
