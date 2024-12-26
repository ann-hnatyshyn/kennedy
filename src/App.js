import './App.css';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation'
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard />
      </header>
      <Navigation/>
      <Profile/>
    </div>
  );
}

export default App;
