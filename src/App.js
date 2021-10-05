import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import Instructor from './pages/Instructor/Instructor';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import Footer from './component/Footer/Footer';
import About from './pages/About/About';
import CourseDetails from './pages/CourseDetails/CourseDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path = '/home'>
            <Home></Home>
          </Route>

          <Route path = '/courses'>
            <Courses></Courses>
          </Route>

          <Route path='/course/:courseCode'>
            <CourseDetails></CourseDetails>
          </Route>

          <Route path = '/instructor'>
            <Instructor></Instructor>
          </Route>

          <Route path='/about'>
            <About></About>
          </Route>

          <Route path= '/contact'>
            <Contact></Contact>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
