import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Topuser from './components/Topuser';
import Trendingpost from './components/Trendingpost';
import Feed from './components/Feed';

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