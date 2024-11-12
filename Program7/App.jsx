import { useState } from 'react';
import './App.css';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function validate() {
        if (username === 'Tayyab' && password === '123456789') {
            setMessage('Login Successful');
            setIsLoggedIn(true);
        }
        else {
            setMessage('Invalid Username or Password!');
        }
    }

    return (
        <div className="loggedin">
            {!isLoggedIn ? (
                <div className='container'>
                    <div className='inputs'>
                        <label>Username: </label>
                        <input type='text' className='fields' value={username} onChange={(e) => setUsername(e.target.value)}/><br/>
                        <label>Password: </label>
                        <input type='password' className='fields' value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
                    </div>
                    <button onClick={validate}>Login</button><br/>
                    <label>{message}</label>
                </div>
            ) : (
                <div className='container'><label>{message}</label></div>
            )}
        </div>
    );
};

export default App;