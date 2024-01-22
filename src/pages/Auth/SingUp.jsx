import React, { useState } from 'react';
import { auth, db, storage } from './firebase.config';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
//import Home from './Home';
import { useNavigate, Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import { setDoc, doc} from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



function SignUp() {

    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();
    // const [userName, setUserName] = useState("");
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    // const [showpassword, setshowpassword] = useState(false);

    const navigate = useNavigate();

    const createUser = async (e) => {
        setLoading(true);
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
                .then((res) => {
                    sendEmailVerification(res.user)
                        .then((res) => {
                            // onSubmit(res.user.uid)
                            alert("Email verification sent to user");
                            navigate('/'); // Assuming navigation only after verification
                        })
                        .catch((err) => {
                            alert("Failed to send verification email:", err);
                            // Handle verification failure, e.g., display error message
                        });

                })
                const date = new Date().getTime();
                const storageRef = ref(storage, `${displayName + date}`);
          
                await uploadBytesResumable(storageRef, file).then(() => {
                  getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                      //Update profile
                      await updateProfile(res.user, {
                        displayName,
                        photoURL: downloadURL,
                      });
                      //create user on firestore
                      await setDoc(doc(db, "users", res.user.uid), {
                        uid: res.user.uid,
                        displayName,
                        email,
                        photoURL: downloadURL,
                      });
          
                      //create empty user chats on firestore
                      await setDoc(doc(db, "userChats", res.user.uid), {});
                      navigate("/");
                    } catch (err) {
                      console.log(err);
                      setErr(true);
                      setLoading(false);
                    }
                  });
                });
        } catch (err) {

        }
    }

    // const onSubmit = async (userid) => {
    //     try {
    //         const userCollectionRef = collection(db, 'User'); // Assuming 'User' is your collection name
    //         const newUserDocRef = doc(userCollectionRef, userid);

    //         await setDoc(newUserDocRef, {
    //             Email: email,
    //             UserName: userName,
    //         });
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    return (
        // <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', border: '1px solid #eee', backgroundColor: '#f5f5f5' }}>
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Lama Chat</span>
                <span className="title">Register</span>
                <form onSubmit={createUser}>
                    <input required type="text" placeholder="display name" />
                    <input required type="email" placeholder="email" />
                    <input required type="password" placeholder="password" />
                    <input required style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={""} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button disabled={loading}>Sign up</button>
                    {loading && "Uploading and compressing the image please wait..."}
                    {err && <span>Something went wrong</span>}
                </form>
                <p>
                    You do have an account? <Link to="/signin">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default SignUp;