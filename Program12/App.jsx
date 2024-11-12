import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import App1 from '../Program1/App.jsx';
import App2 from '../Program5/App.jsx';
import App3 from '../Program7/App.jsx';
import App4 from '../Program9/App.jsx';
import App5 from '../Program11/App.jsx';
import './App.css';

function App() {
    return (
        <Router>
            <div className='app-container'>
                <nav className='navbar'>
                    <ul>
                        <li><Link to="/app1">App 1: Greeting Message</Link></li>
                        <li><Link to="/app2">App 2: Counter</Link></li>
                        <li><Link to="/app3">App 3: Login Page</Link></li>
                        <li><Link to="/app4">App 4: Calculator</Link></li>
                        <li><Link to="/app5">App 5: Calendar</Link></li>
                    </ul>
                </nav>

                <div className='content'>
                    <Routes>
                        <Route path="/app1" element={<App1 />} />
                        <Route path="/app2" element={<App2 />} />
                        <Route path="/app3" element={<App3 />} />
                        <Route path="/app4" element={<App4 />} />
                        <Route path="/app5" element={<App5 />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;