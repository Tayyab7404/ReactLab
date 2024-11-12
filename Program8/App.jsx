import { useState } from 'react';
import './App.css';

function App() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [department, setDepartment] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
    };

    const WebForm = (
        <div className='FormContainer'>
            <header className='App-header'>
                <h1>Student Form Registration</h1>
            </header>

            <form onSubmit={handleSubmit}>
                <label htmlFor='firstname'>Enter Your First Name: </label>
                <input type='text' name='firstname' onChange={(e) => setFirstName(e.target.value)}/><br/>

                <label htmlFor='lastname'>Enter Your Last Name: </label>
                <input type='text' name='lastname' onChange={(e) => setLastName(e.target.value)} /><br/><br/>
                
                <label htmlFor='dob'>Enter Your Date of Birth: </label>
                <input type='date' name='dob' onChange={(e) => setDateOfBirth(e.target.value)} /><br/><br/>

                <label htmlFor='gender'>Select Your Gender:</label>
                <select name='gender' onChange={(e) => setGender(e.target.value)}>
                    <option value=''>Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Other'>Other</option>
                </select><br/><br/>

                <label htmlFor='mobile'>Enter Your Mobile Number: </label>
                <input type='tel' name='mobile' pattern='[0-9]{10}' onChange={(e) => setMobile(e.target.value)} /><br/>

                <label htmlFor='email'>Enter Your Email: </label>
                <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} /><br/>

                <label htmlFor='password'>Enter Your Passsword: </label>
                <input type='password'name='password' onChange={(e) => setPassword(e.target.value)} /><br/><br/>
                
                <label htmlFor='address'>Enter Your Address: </label>
                <input type='text' name='address' onChange={(e) => setAddress(e.target.value)}/><br/><br/>

                <label htmlFor='department'>Select Your Department: </label>
                <select name='department' onChange={(e) => setDepartment(e.target.value)}>
                    <option value=''>Department</option>
                    <option value='CSE'>Computer Science</option>
                    <option value='ECE'>Electronics</option>
                    <option value='ME'>Mechanical</option>
                    <option value='CE'>Civil</option>
                    <option value='CHE'>Chemical</option>
                </select><br/><br/>

                <div className='SubmitButton'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );

    return (
        <div>
            {isSubmitted ? 
                <>
                    <h1 align='center'>Form Submitted</h1>
                    <div className='Submissions'>
                        <p>Name: {firstName} {lastName}</p>
                        <p>Date of Birth: {dateOfBirth}</p>
                        <p>Gender: {gender}</p>
                        <p>Mobile No: {mobile}</p>
                        <p>Email: {email}</p>
                        <p>Password: {password}</p>
                        <p>Address: {address}</p>
                        <p>Department: {department}</p>
                    </div>
                </> : WebForm}
        </div>
    );
};

export default App;