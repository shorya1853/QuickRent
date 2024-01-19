import React, { useState } from 'react';

import { auth, googleProvider } from './firebase.config';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function SignIn() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const nav = useNavigate();

    function signInUser() {

        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            nav('/');
        })
        .catch((err) => {
            console.log(err);
        })

    }

    function signInwithGoogle() {

        signInWithPopup(auth, googleProvider)
        .then(() => {
            nav('/');
        })
        .catch((err) => {
            console.log(err);
        })

    }

    return(
        <div>
            <h1>SignIn</h1>

            <input type="text" placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={signInUser}>Submit</button>
            <button onClick={signInwithGoogle}>SignIn With Google</button>

        </div>
    );
}

export default SignIn;