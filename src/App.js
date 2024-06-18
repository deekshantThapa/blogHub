import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetail from "./BlogDetail";
import About from "./About";

function App() {
  return (
    <Router>
    <div className="app">
      <Header/>
      <div className="content">
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route exact path='/blogs/:id'>
          <BlogDetail/>
        </Route>
        <Route exact path='/about'>
          <About/>
        </Route>
        <Route exact path='/contact'>
          <Contact/>
        </Route>
      </Switch>
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;