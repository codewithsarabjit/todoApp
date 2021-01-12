import React from 'react';

import LoginForm from '../../components/login-form/login-form.component';

const Login = () => ({
    render() {
        return (
            <div>
                <h2>THIS IS LOGIN PAGE</h2>
                <LoginForm />
            </div>
        );
    }
});

export default Login;