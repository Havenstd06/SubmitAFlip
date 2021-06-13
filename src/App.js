import React, {useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Home from "./Pages/Home";

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
        AOS.init({
            once: true,
            disable: 'phone',
            duration: 700,
            easing: 'ease-out-cubic',
        });
    });

  return (
    <Router>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
