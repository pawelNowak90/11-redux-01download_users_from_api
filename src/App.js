import './App.css';

import { BrowserRouter as Router, Route} from "react-router-dom";

import Nav from './components/Nav';
import Home from './components/home/components/Home';
import UsersWrapper from './components/users/components/UsersWrapper';
import Contact from './components/contact/components/Contact';


function App() {
  return (
    <Router>
        <Nav />
        <div className="App">
            <Route path="/" exact>
                <Home/>
            </Route>

            <Route path="/users">
                <UsersWrapper/>
            </Route>

            <Route path="/contact">
                <Contact/>
            </Route>

        </div>
    </Router>
  );
}

export default App;