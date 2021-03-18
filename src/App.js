
import './App.css';
import { BrowserRouter as Router ,Switch ,Route } from 
'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Joinme from './pages/Joinme';

function App() {
  return (
    <>
    <Router>
      <Header/> 
      <Switch>  
        <Route path='/' exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Services" component={Services} />
        <Route path="/Services" component={Joinme} />
      </Switch>
      <Footer/>
    </Router>
    </>

  );
}

export default App;
