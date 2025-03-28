// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Topuser from './components/Topuser';
import Trendingpost from './components/Trendingpost';
import './styles/Styles.css'; // Import global styles


const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/top-users" element={<Topuser />} />
                <Route path="/trending-posts" element={<Trendingpost />} />
            </Routes>
        </Router>
    );
};

export default App;