import Child from './Child.jsx';
import './App.css';

const App = () => {
    return (
        <div className='container'>
            <h1>Parent Component</h1>
            <Child message='Hello from child.jsx using jsx framework!'/>
        </div>
    );
};

export default App;