
import React, { useState } from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News ';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  // const pageSize = 6;
  // const apiKey = process.env.REACT_APP_NEWS_API

  const [progess, setProgess] = useState(0)

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={3}
          progess={progess}
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgess} key="general" pageSize={6} country="in" category="general" />} />
          <Route path="/business" element={<News setProgress={setProgess} key="business" pageSize={6} country="in" category="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgess} key="entertainment" pageSize={6} country="in" category="entertainment" />} />
          <Route path="/general" element={<News setProgress={setProgess} key="general" pageSize={6} country="in" category="general" />} />
          <Route path="/health" element={<News setProgress={setProgess} key="health" pageSize={6} country="in" category="health" />} />
          <Route path="/science" element={<News setProgress={setProgess} key="science" pageSize={6} country="in" category="science" />} />
          <Route path="/sports" element={<News setProgress={setProgess} key="sports" pageSize={6} country="in" category="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgess} key="technology" pageSize={6} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  )

}

export default App
