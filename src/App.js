import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/LandingPage';
import Dashboard from './Pages/Dashboard';
// import Route from './Components/Route';
import AccountPage from './Pages/AccountPage';
import BookingsPage from './Pages/BookingsPage';
import Link from './Components/Link';
import Route from './Components/Route';

const App = () => {

return (
  <div>
    {/* <h1>Hello</h1> */}
    {/* <Dashboard/> */}
    <Link to="/accounts">Go to accounts</Link>
    <Link to="/bookings">Go to bookings</Link>
    <div>
      <Route path="/accounts">
      <AccountPage/>
      </Route>
      <Route path="/bookings">
      <BookingsPage/>
      </Route>
    </div>

  </div>
)



}
export default App;
