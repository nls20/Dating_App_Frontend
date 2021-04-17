
import logo from './logo.svg';
import './App.css';
import VinderContainer from './containers/VinderContainer';
import {BrowserRouter  as Router, Route, Switch} from 'react-router-dom'
import SwipingPage from './components/Swiping/SwipingPage'
import NavBar from './components/NavBar'
import MatchesPage from './components/Matches/MatchesPage'
import ProfilePage from './components/Profile/ProfilePage'

function App() {
  return (
    <div className="App">
      <VinderContainer/>
    </div>
  );
}

export default App;
