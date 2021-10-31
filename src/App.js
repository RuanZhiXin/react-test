import React from 'react';
import {HashRouter as Router, Link, Route, Switch} from "react-router-dom";

import './App.css';
import UseStateDemo from './pages/UseStateDemo';
import UseEffectDemo from './pages/UseEffectDemo';
import UseContextDemo from './pages/UseContextDemo';
import UseReducerDemo from './pages/UseReducerDemo';
import UseCallbackDemo from './pages/UseCallbackDemo';
import UseMemoDemo from './pages/useMemoDemo';
import UseRefDemo from './pages/UseRefDemo';

const listItemClassName = "inline border-gray border-solid border m-4 p-2";

function App() {
  return (
      <Router>
        <div className="w-full text-2xl mt-8 text-center">
          <nav>
            <ul>
              <li className={listItemClassName}>
                <Link to="/useState">useState</Link>
              </li>
              <li className={listItemClassName}>
                <Link to="/useContext">useContext</Link>
              </li>
              <li className={listItemClassName}>
                <Link to="/useReducer">useReducer</Link>
              </li>
              <li className={listItemClassName}>
                <Link to="/useEffect">useEffect</Link>
              </li>
              <li className={listItemClassName}>
                <Link to="/useCallback">useCallback</Link>
              </li>
              <li className={listItemClassName}>
                <Link to="/useMemo">useMemo</Link>
              </li>
              <li className={listItemClassName}>
                <Link to="/useRef">useRef</Link>
              </li>
            </ul>
          </nav>

          <div className="mt-64 w-screen">
            <Switch>

              <Route path="/useEffect">
                <UseEffectDemo/>
              </Route>
              <Route path="/useContext">
                <UseContextDemo/>
              </Route>
              <Route path="/useReducer">
                <UseReducerDemo/>
              </Route>
              <Route path="/useCallback">
                <UseCallbackDemo/>
              </Route>
              <Route path="/useMemo">
                <UseMemoDemo/>
              </Route>
              <Route path="/useRef">
                <UseRefDemo/>
              </Route>
              <Route path="/useState">
                <UseStateDemo/>
              </Route>
              <Route path="/">
                <UseStateDemo/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>

  );
}


export default App;
