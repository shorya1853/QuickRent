import { createContext, useState, useEffect} from "react";
import { db } from "../pages/Auth/firebase.config";
import {doc, getDoc} from 'firebase/firestore';
import { auth } from "../pages/Auth/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";


export const UserContext = createContext(null);


export const UserContextProvider = (props) => {

    const [userdata, setUserdata] = useState(null);
    const [userAuth, setUserAuth] = useState(null);
    // const [user, setUser] = useState('');

    useEffect(() => {
      onAuthStateChanged(auth, (user)=> {
        if(user){
          setUserAuth(true)
          fetchUserPost(user.uid)

        }
        else {
          console.log('No user found');
          setUserAuth(false);
        }
      })
    }, [userAuth])

    const fetchUserPost = async (userUid) => {
        try {
            const userRef = doc(db, 'users', userUid);
            const docSnapshot = await getDoc(userRef);
    
            if (docSnapshot.exists()) {
                const newData = { ...docSnapshot.data(), id: docSnapshot.id };
                setUserdata(newData);
                
            } else {
                console.log('No such document!');
            }
        } catch (error) {
            console.log('Error fetching user data:', error);
        }
        

    };

    const LogOut = async () => {
      try {
        await signOut(auth)
        setUserAuth(false)
        alert("signOut successfully")
      } catch (err) {
        console.error(err)
      }
    }

      const contextValue = {
        userdata,
        userAuth,
        fetchUserPost, 
        LogOut,
      }

    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    )
}