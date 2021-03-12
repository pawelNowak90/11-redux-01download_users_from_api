import './App.css';

import { BrowserRouter as Router, Route} from "react-router-dom";

import Nav from './components/Nav';
import Home from './components/home/Home';
import UsersContainer from './components/users/UsersContainer';
import Contact from './components/contact/Contact';


function App() {
  return (
    <Router>
        <Nav />
        <div className="App">
            <Route path="/" exact>
                <Home/>
            </Route>

            <Route path="/users">
                <UsersContainer/>
            </Route>

            <Route path="/contact">
                <Contact/>
            </Route>

        </div>
    </Router>
  );
}

export default App;