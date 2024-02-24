import React, { useContext, useEffect, useRef, useState } from 'react'
import { PhoneContext } from './context';
import './otp.css'

const OtpPage = ({ length }) => {

    const phoneNumber = useContext(PhoneContext);
    const [otp, setOtp] = useState(new Array(length).fill(""));
    const [status, setStatus] = useState(false);

    const inputRef = useRef([]);

    useEffect(() => {
        if (inputRef.current[0]) {
            inputRef.current[0].focus();
        }
    }
    , [])

    const handleChange = (index, e) => {
        const val = e.target.value;

        const newOtp = [...otp];
        newOtp[index] = val.substring(val.length - 1);
        setOtp(newOtp);

        if(newOtp.join("").length === length){
            setStatus(true);
        }
        else{
            setStatus(false);
        }

        if (val && index < length - 1) {
            inputRef.current[index + 1].focus();
        }
    }

    const handleClick = (i) => {
        inputRef.current[i].setSelectionRange(1, 1);
    }

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && index > 0 && !otp[index] && inputRef.current[index - 1]) {
            inputRef.current[index - 1].focus();
        }
    }

    const handleSubmit = () => {
        const validOtp = otp.join("");
        if (isNaN(validOtp)) {
            alert("Please Enter a valid inputs");
            return;
        }

        if (validOtp.length === length) {
            console.log("Login Successful " + validOtp);
        } else {
            alert("Invalid Otp");
        }

    }

    return (
        <div className='otpForm'>
            <h1>OTP sent to {phoneNumber}</h1>
            {
                otp.map((val, i) =>
                    <input
                        key={i}
                        type='text'
                        ref={(input) => inputRef.current[i] = input}
                        value={val}
                        onChange={(e) => handleChange(i, e)}
                        onClick={() => handleClick(i)}
                        onKeyDown={(e) => handleKeyDown(i, e)}
                    />
                )
            }
            <h1>{status}</h1>
            <br /><button onClick={handleSubmit} disabled={!status}>Submit OTP </button>
        </div> 
    )
}

export default OtpPage
