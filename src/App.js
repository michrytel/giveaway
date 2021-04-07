import Home from "./components/pages/Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Logout from "./components/pages/Logout";
import GiveAway from "./components/pages/GiveAway";
import {AuthProvider} from "./components/contexts/AuthContext";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route exact path='/login'>
                        <Login/>
                    </Route>
                    <Route exact path='/register'>
                        <Register/>
                    </Route>
                    <Route exact path='/logout'>
                        <Logout/>
                    </Route>
                    <Route exact path='/giveaway'>
                        <GiveAway/>
                    </Route>
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;
