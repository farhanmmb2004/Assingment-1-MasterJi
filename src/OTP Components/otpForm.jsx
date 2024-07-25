import React from "react";
import {useState} from "react";
import './otpForm.css';
export function Otp(){
    let [active,setActive]=useState(0);
    let [otp,setOtp]=useState([{box1:0},{box2:0},{box3:0},{box4:0}]);
    let [status,setStatus]=useState("");
    let handleSubmit=()=>{
        const ans = otp.map(o => Object.values(o)[0]).join('');
    if(ans==="1234"){
    console.log("success");
    setStatus("pass");
    }
    else{
        console.log("failed");
        setStatus("fail");
    }
    }
    let handleChange=(e)=>{
    let id=e.target.id;
    let number=e.key;
    if(number==="Backspace"){
    number="";
    }
    else if(!(number>=0||number<=9)){
    return
    }
        setOtp(prevOtp => 
            prevOtp.map(item =>
              item.hasOwnProperty(id) ? { [id]: number } : item
            )
          );
    // setAns(otp[0].box1+otp[1].box2+otp[2].box3+otp[3].box4)
    }
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
                        <input type="text" maxLength="1" id="box1" value={otp[0].box1} onKeyDown={handleChange}/>
                        <input type="text" maxLength="1" id="box2" value={otp[1].box2} onKeyDown={handleChange}/>
                        <input type="text" maxLength="1" id="box3" value={otp[2].box3} onKeyDown={handleChange}/>
                        <input type="text" maxLength="1" id="box4" value={otp[3].box4} onKeyDown={handleChange}/>
                    </div>
                    <div className={`submit ${status}`} onClick={handleSubmit}>
                        {status==="fail"&&"verification failed!"}
                        {status==="pass"&&"verification succesfull!"}
                        {status===""&&"verify"}
                    </div>
                    <span>did not recieve code?</span>
                    <span id="p1">Resend</span>
                </div>
                </div></div>
    );
}