import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const validate = () => {
        let errors = {};


        if (!username) {
            errors.username = 'Username is required';
        }

        if (!password) {
            errors.password = 'Password is required';
        } else if (
            !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)
        ) {
            errors.password =
                'Password must contain at least one number, one uppercase and lowercase letter, and at least 8 characters';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validate()) {
            navigate.push('/dashboard');
        }
    };


    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Login
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={10}>
                        <TextField fullWidth label="Username" value={username} onChange={handleUsernameChange}
                            error={!!errors.username} helperText={errors.username} />
                    </Grid>

                    <Grid item xs={10}>
                        <TextField fullWidth label="Password" type="password" value={password} onChange={handlePasswordChange}
                            error={!!errors.password} helperText={errors.password} />
                    </Grid>

                    <Grid item xs={5} >
                        <Button fullWidth variant="contained" type="submit">

                            <Link to="/dashboard">Login</Link>
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Typography variant="body1" align="center">
                <br></br>
                Don't have an account? <Link to="/register">Create account</Link>
            </Typography>
        </Container>
    );
};

export default LoginPage;
