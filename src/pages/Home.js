import React from 'react';
import '../App.css';
import './Home.css';

function Home() {
    return (
        <div className='hero-container'>

            <h1> IAM A NATIONAL GEOGRAPHIC EXPLORER</h1>
            <p>Welcome to my hodophile world < br />Let's explore the places that i will travel </p>
            <div className="hero-btns">
                <button className='btns'>GET STARTED</button>
                <button
                    className='btns'> WATCH MY VIDEOS <i className="fa fa-play-circle" />
                </button>
            
            </div>
        </div>
    );
}

export default Home
