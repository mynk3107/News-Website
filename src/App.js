import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import React,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App =()=> {
  const pageSize=9
  const [progress, setProgress]=useState(0)
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        height={2}
        progress={progress}/>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress} key='general' pageSize={pageSize} country='in' category='general' />}></Route>
            <Route exact path='/buisness' element={<News setProgress={setProgress} key='buisness' pageSize={pageSize} country='in' category='buisness' />}></Route>
            <Route exact path='/entertainment' element={<News setProgress={setProgress} key='entertainment' pageSize={pageSize} country='in' category='entertainment' />}></Route>
            <Route exact path='/general' element={<News setProgress={setProgress} key='general' pageSize={pageSize} country='in' category='general' />}></Route>
            <Route exact path='/health' element={<News setProgress={setProgress} key='health' pageSize={pageSize} country='in' category='health' />}></Route>
            <Route exact path='/science' element={<News setProgress={setProgress} key='science' pageSize={pageSize} country='in' category='science' />}></Route>
            <Route exact path='/sports' element={<News setProgress={setProgress} key='sports' pageSize={pageSize} country='in' category='sports' />}></Route>
            <Route exact path='/technology' element={<News setProgress={setProgress} key='technology' pageSize={pageSize} country='in' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
}
export default  App;