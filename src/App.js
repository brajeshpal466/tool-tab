
import './App.css';
import Navbar from './components/navbar/Navbar';
import { GloabalContainer } from './globalcomponents/GlobaElement';
import {BrowserRouter as Router, Route, Switch }  from 'react-router-dom'
import Tools from './components/pages/Tools/Tools';
import Overview from './components/pages/Overview/Overview';
import Automation from './components/pages/Automation/Automation';
import Screenshots from './components/pages/Screenshots/Screenshots';

function App() {
  return (
    <Router>
     <GloabalContainer>
     <Navbar></Navbar>
     <Switch >
       <Route exact path='/' component={Overview}></Route>
     </Switch>
     <Switch >
       <Route  exact path='/tools' component={Tools}></Route>
     </Switch>
     <Switch >
       <Route  exact path='/automation' component={Automation}></Route>
     </Switch>
     <Switch >
       <Route exact path='/screenshots' component={Screenshots}></Route>
     </Switch>
     </GloabalContainer> 
     </Router>
  );
}

export default App;
