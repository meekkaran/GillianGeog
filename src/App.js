
import './App.css';
import { BrowserRouter as Router ,Switch ,Route } from 
'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

function App() {
  return (
    <>
    <Router>
      <Header/> 
      <Switch>  
        <Route path='/' exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Services" component={Services} />
      </Switch>
      <Footer/>
    </Router>
    </>

  );
}

export default App;
