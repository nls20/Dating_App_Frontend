
import logo from './logo.svg';
import './App.css';
import VinderContainer from './containers/VinderContainer';
import {BrowserRouter  as Router, Route, Switch} from 'react-router-dom'
import SwipingPage from './components/SwipingPage'
import NavBar from './components/NavBar'
import MatchesPage from './components/MatchesPage'
import ProfilePage from './components/ProfilePage'

function App() {
  return (
    <div className="App">
      <VinderContainer/>
    </div>
  );
}

export default App;
