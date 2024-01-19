import React, { useState } from 'react';
import { auth, db } from './firebase.config';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
//import Home from './Home';
import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import { setDoc, doc, collection } from 'firebase/firestore';


function SignUp() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [userName, setUserName] = useState("");
    // const [showpassword, setshowpassword] = useState(false);

    const nav = useNavigate();

    function createUser() {
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                onSubmit(res.user.uid)
                sendEmailVerification(res.user)
                    .then((res) => {
                        // onSubmit(res.user.uid)
                        alert("Email verification sent to user");
                        nav('/'); // Assuming navigation only after verification
                    })
                    .catch((err) => {
                        alert("Failed to send verification email:", err);
                        // Handle verification failure, e.g., display error message
                    });
            })
            .catch((err) => {
                alert(err);
            })
    }

    const onSubmit = async (userid) => {
        try {
            const userCollectionRef = collection(db, 'User'); // Assuming 'User' is your collection name
            const newUserDocRef = doc(userCollectionRef, userid);

            await setDoc(newUserDocRef, {
                Email: email,
                UserName: userName,
            });
            console.log(newUserDocRef.id)
            alert("Doc add")
        } catch (err) {
            console.error(err);
        }
    };

    return (
        // <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', border: '1px solid #eee', backgroundColor: '#f5f5f5' }}>
        <div>
            <h1>SignUp</h1>
            <input type="text" name="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
            <input type="UserName" placeholder="Enter your userName" onChange={(e) => setUserName(e.target.value)} />
            <button onClick={createUser}>Submit</button>
        </div>
    );
}

export default SignUp;