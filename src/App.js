import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/LandingPage';
import Dashboard from './Pages/Dashboard';
import AccountPage from './Pages/AccountPage';
import BookingsPage from './Pages/BookingsPage';
import Link from './Components/Link';
import Route from './Components/Route';

const App = () => {

return (
  <div>
    {/* <h1>Hello</h1> */}
    {/* <Dashboard/> */}
    <LandingPage/>
    <div>
      <Route path="/accounts">
      <AccountPage/>
      </Route>
      <Route path="/bookings">
      <BookingsPage/>
      </Route>
      <Route path="/dashboard">
      {/* <Dashboard/> */}
      </Route>
    </div>

  </div>
)



}
export default App;
