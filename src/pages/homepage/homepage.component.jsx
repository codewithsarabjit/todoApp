import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../assets/logo.svg';

const HomePage = () => ({
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                ReactJS TODO Application
                </p>
                <Link
                    className="App-link"
                    to="/login"
                >
                    Login
                </Link>
            </header>
        )
    }
});

export default HomePage;