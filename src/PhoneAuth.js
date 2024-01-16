import React, {useState}from 'react'
import PhoneInput from 'react-phone-number-input';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import auth from './firebase.config';

export default function PhoneAuth() {
    const [phone, setPhone] = useState("");
    const [user, setUser] = useState(null);
    const [otp, setOtp] = useState("");

    const getOtp = async() => {
      try{
        const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
        const confirm = await signInWithPhoneNumber(auth, phone, recaptcha)
        setUser(confirm)
      }catch(err){
        console.error(err);
      }

    }

    const verifyOtp = async () => {
      try{
        const token = await user.confirm(otp);
        console.log(token);
      }catch(err){
        console.error(err);
      }

    }

    return (
      <div>
        <h2>Login Form</h2>
        <div id="sign-in-button"></div>
        <PhoneInput
          placeholder="Enter phone number"
          defaultCountry="IN"
          value={phone}
          onChange={(phone) => setPhone("+" + phone)} />
        <button type="submit" onClick={getOtp}>GetOtp</button>
        <div style={{marginTop:"10px"}} id="recaptcha"></div>

        <h2>Enter OTP</h2>
        
        <input type="number" name="otp" placeholder="OTP Number" required 
          onChange={(e) => {
            setOtp(e.target.value)
          }}
        />
        <button type="submit" onClick={verifyOtp}>CheckOtp</button>
      </div>
    )
}
