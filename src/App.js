import { Menu } from '../src/components/Menu/Menu';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import CPost from './Pages/CPost/CPost';
import UProfile from './Pages/UProfile/UProfile';
import SPost from './Pages/SPost/SPost';
function App() {
  const userdata=false;
  return (
    <div className="App">
 <Router>
  <Menu/>
  <Switch>
  <Route  path="/user/uprofile">
  {userdata?<UProfile/>:<Login/>}
    
         </Route>
      <Route exact path="/user">
    <Home/>
         </Route>
         <Route  path="/register">
    {userdata?<Home/>:<Register/>}
         </Route>
    <Route path="/login">
    {userdata?<Home/>: <Login/>}
           </Route>
           <Route path="/post/:postId">
      {userdata?<SPost/>: <Login/>}
             </Route>
                    <Route  path="/post">
      {userdata?<CPost/>: <Login/>}
                 </Route>
                   
           </Switch>
 </Router>
    </div>
  );
}
export default App;
