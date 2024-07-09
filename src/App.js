import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

const App = () =>{
const pageSize = 25;
const apiKey =process.env.REACT_APP_NEWS_API
const [progress, settingProgress] = useState(0)
const setProgress = (progress) =>{
  settingProgress(progress)
}
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height ={4}
        />
    <Routes><Route exact path="/" element={<News setProgress={ setProgress} apiKey={ apiKey} pageSize = { pageSize} country="in"category="general"/>}></Route></Routes>
    <Routes><Route exact path="/business" element={<News setProgress={ setProgress} apiKey={ apiKey} pageSize = { pageSize} country="in"category="business"/>}></Route></Routes>
    <Routes><Route exact path="/entertainment" element={<News setProgress={ setProgress} apiKey={ apiKey} pageSize = { pageSize} country="in"category="entertainment"/>}></Route></Routes>
    <Routes><Route exact path="/general" element={<News setProgress={ setProgress} apiKey={ apiKey} pageSize = { pageSize} country="in"category="general"/>}></Route></Routes>
    <Routes><Route exact path="/health" element={<News setProgress={ setProgress} apiKey={ apiKey} pageSize = { pageSize} country="in"category="health"/>}></Route></Routes>
    <Routes><Route exact path="/science" element={<News setProgress={ setProgress} apiKey={ apiKey} pageSize = { pageSize} country="in"category="science"/>}></Route></Routes>
    <Routes><Route exact path="/sports" element={<News setProgress={ setProgress} apiKey={ apiKey} pageSize = { pageSize} country="in"category="sports"/>}></Route></Routes>
    <Routes><Route exact path="/technology" element={<News setProgress={ setProgress} apiKey={ apiKey} pageSize = { pageSize} country="in"category="technology"/>}></Route></Routes>
      </Router>
      </div>
    )
}
export default App;