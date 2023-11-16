import React, { useState, useContext } from 'react';
import UserContext from './UserContext';
import axios from 'axios';
import '../../css/Login.scss';

export default function Login() {

    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const { setUser } = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/login', values);
            setUser(null);
        } catch (error) {
            if (error.response && error.response.status === 422) {
                // handle validation errors here
                console.log('VALIDATION FAILED:', error.response.data.errors);
                setErrors(error.response.data.errors);
            } else {
                console.log('UNKNOWN ERROR', error.message);
            }
        }
    };

    const handleChange = (event) => {
        setValues((previousValues) => ({
            ...previousValues,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <form action="/login" method="post" onSubmit={handleSubmit}>

            Email:<br />
            <input type="email" name="email" value={values.email} onChange={handleChange} />
            <br />
            {errors.email
                ? <div className="errors">{errors.email.map((error, i) => <div key={i} className="error">{error}</div>)}</div>
                : ''
            }

            Password:<br />
            <input type="password" name="password" value={values.password} onChange={handleChange} />
            <br />
            {errors.password
                ? <div className="errors">{errors.password.map((error, i) => <div key={i} className="error">{error}</div>)}</div>
                : ''
            }

            <button>Login</button>

        </form>
    );
}