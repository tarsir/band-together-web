import * as React from 'react';
import './home.less';

const Home = () => {
    return (
        <div className="home-container has-text-centered">
            <h1 className="home-header">Welcome to Band Together!</h1>

            <p>
                Band Together is a musician social media platform where musicians can connect with others.
            </p><p>
                Because when you band together, you band better.
            </p>
        </div>
    );
};

export default Home;