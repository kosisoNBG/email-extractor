import React from 'react';
import ClearButton from './ClearButton';

function Home() {
    function getInputValue() {
        var inputVal = document.getElementById('emailInput').value;

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (inputVal.match(validRegex)) {
            alert('Valid email address!');
            document.getElementById('emailInput').focus();
            return true;
        } else {
            alert('Invalid email address!');
            document.getElementById('emailInput').focus();
            return false;
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="title">
                            <h1>Email Checker</h1>
                            <p className="subtitle">
                                <em>Verify an email address, with speed and accuracy.</em>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#eee', borderRadius: 2 }} className="container-fluid p-2 ">
                <div className="col-md-6 mx-auto pb-4">
                    <label htmlFor="emailInput" style={{ color: '#8b8b8b' }}>Email Address</label>
                    <input
                        className="form-control"
                        placeholder="name@example.com..."
                        id="emailInput"
                        style={{ border: '1px solid #000', height: 50}}
                    />
                </div>
                <div className="col-md-4 mx-auto">
                    <button type="button" className="btn btn-dark btn-lg mr-1" onClick={getInputValue}>Check</button>
                    <ClearButton />
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="pt-2 mb-4">
                            <h3>What is Email Checker ?</h3>
                            <hr />
                            <p style={{ textAlign: 'justify' }}>
                                Email Checker is an online software that you will find useful when verifying an email.</p>
                                <p>Let's say you got a list of emails collected from an online survey in a particular niche but not sure about the quality of responses you got? Some of the emails entered during the input forms could be fake ones that could bounce off you trying to send an email to such an address.</p>
                                <p> Wouldn’t that be useful if a service lets you remove such fake email ids ? That's exactly what we do here. With our free plan you need to enter email one by one with some fair usage limit per hour. </p>
                                <p>If you want to validate a list, use our premium email verification service to get that done faster.</p>
                        </div>
                    </div>
                </div>
                <br /><br /><br />
            </div>
        </div>
    );
}

export default Home;