import React, { useState } from 'react';
import './App.css'

function App() {
    const list = ['Y21CS172', 'Y21CS185', 'Y21CS197', 'Roshan Ali', 'Shreyas'];
    const [filterList, setFilterList] = useState(list);

    const handleSearch = (event) => {
        if (event.target.value === '') {
            setFilterList(list);
            return;
        }
        const filteredValues = list.filter((item) => item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
        setFilterList(filteredValues);
    };
    
    return (
        <div className='container'>
            <h1 className='title'>Student Information Search:</h1>
            <div className='inputs'>
                <label htmlFor='query'>Search (Name/Regd.No):</label>
                <input name='query' type='text' onChange={handleSearch}/>
            </div>
            <div className='output'>
                {filterList && filterList.map((item, index) => ( <span key={index}>{item}</span> ))}
            </div>
        </div>
    );
};

export default App;