import React, { useState } from 'react';
import { InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import axios from 'axios';
import '../styles/Home.css'

const LoginForm = ({ setToken }) => {
    const [credentials, setCredentials] = useState({ username: '', password: '', company: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/login', credentials);

            if (response.data.token) {
                setToken(response.data.token);
            } else {
                console.error('Login failed: Token not received');
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <body className='body'>
            <div class="wrapper">
                <form onSubmit={handleSubmit} class="form">
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <div class="inp">
                        <TextField
                            sx={{ bgcolor: 'white', borderRadius: "12px" }}
                            margin="normal"
                            fullWidth
                            placeholder='Username'
                            name="username"
                            // value={"credentials.username"}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div class="inp">
                        <TextField
                            sx={{ bgcolor: 'white', borderRadius: "12px" }}
                            margin="normal"
                            placeholder='Password'
                            fullWidth
                            type="password"
                            name="password"
                            // value={"credentials.password"}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div class="inp">
                        <InputLabel style={{ color: 'white' }}>Company *</InputLabel>
                        <Select
                            sx={{ width: 230, mt: 1, bgcolor: 'white', borderRadius: "12px" }}
                            fullWidth
                            defaultValue='Company'
                            name="company"
                            // value={"credentials.company"}
                            onChange={handleChange}
                            label="company"
                            required
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>company1</MenuItem>
                            <MenuItem value={20}>company2</MenuItem>
                            <MenuItem value={30}>company3</MenuItem>
                        </Select>
                    </div>
                    <button class="submit">Submit</button>
                    {/* <p class="footer">¿No tienes cuenta?  <a href="#" class="link">Por favor, Registrate</a></p> */}
                </form>
                <div class="banner">
                    <h1 class="wel_text">Yousef Swailem</h1><br />
                    <p class="para"></p>
                </div>
            </div>
        </body>
    );
};

export default LoginForm;
