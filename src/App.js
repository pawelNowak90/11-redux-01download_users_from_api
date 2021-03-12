import './App.css';

import Home from './components/home/Home';
import UsersContainer from './components/users/UsersContainer';
import Contact from './components/contact/Contact';


function App() {
  return (
    <div className="App">
        <Home/>
        <UsersContainer/>
        <Contact/>
    </div>
  );
}

export default App;