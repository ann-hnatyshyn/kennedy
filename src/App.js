import './App.css'
import Booking from './components/Booking'
import About from './components/About'
import Button from './components/Button'
import Footer from './components/Footer'
import NavBar from './components/Navbar'
import Payment from './components/Payment'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <About/>
        <Booking/>
        <Button/>
        <Payment/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;