import './App.css';
import './components/BookingForm';
import Booking from './components/BookingForm';
import './components/Button';
import './components/Footer';
import './components/Navbar';
import './components/PaymentForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Booking/>
      </header>
    </div>
  );
}

export default App;