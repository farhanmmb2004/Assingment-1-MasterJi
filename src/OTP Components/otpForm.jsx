import React from "react";
import './otpForm.css';
export function Otp(){
    return(
        <div className="main">
            <div className="content">
                <h1>Chai Aur Code</h1>
                <br />
                <div className="OTP-BOX">
                    <h2>Mobile Phone Verification</h2>
                    <p>adsf</p>
                    <h5>Enter 4-Digits Verification code that was sent to </h5>
                    <h5 id="h51">your phone number</h5>
                    <div id="input">
                        <input type="number" />
                        <input type="number" />
                        <input type="number" />
                        <input type="number" />
                    </div>
                    <div className="submit">
                        verify Account
                    </div>
                    <span>did not recieve code?</span>
                    <span id="p1">Resend</span>
                </div>
                </div></div>
    );
}