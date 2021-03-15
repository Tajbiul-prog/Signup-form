import React from 'react';
import './Signup.css'
import image from '../images/pexels-markus-spiske-1089438.jpg'

const Signup = () => {
    return (
        <div class='section'>
            <div class="imgBox">
                <img src={image} alt=""/>
            </div>
            <div class="contentBox">
                <div className="formBox">
                <form>
                    <h2>Login</h2>
                    <div className="inputBox">
                        <span>User Name</span>
                        <input type="text" name="" id=""/>
                    </div>
                    <div className="inputBox">
                        <span>Password</span>
                        <input type="password" name="" id=""/>
                    </div>
                    <div className="inputBox">
                        <input type="submit" name="" value='Sign In' id=""/>
                    </div>
                    <div className="inputBox">
                        <p>Don't have a account? <a href="#lol">Sign Up</a></p>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;