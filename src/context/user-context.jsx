import { createContext, useState, useEffect} from "react";
import { db } from "../pages/Auth/firebase.config";
import {doc, getDoc} from 'firebase/firestore';
import { auth } from "../pages/Auth/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";


export const UserContext = createContext(null);


export const UserContextProvider = (props) => {

    const [userdata, setUserdata] = useState(null);
    const [userAuth, setUserAuth] = useState(false);
    const [user, setUser] = useState('');


    const fetchData = async () => {
        try {
          const authUser = await new Promise((resolve, reject) => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
              unsubscribe(); // Unsubscribe once we get the user or determine it's null
              resolve(user);
            }, reject);
          });

          if (authUser) {
            setUser(authUser);
            setUserAuth(true);
          } else {
            console.log('No user found');
            setUserAuth(false);
          }
        } catch (error) {
          console.error('Error fetching user authentication:', error);
          setUserAuth(false);
        }
      };

    const fetchUserPost = async () => {
        try {
            const userRef = doc(db, 'users',user.uid);
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
    
    useEffect(()=> {
      fetchData()
      fetchUserPost();
    }, [userAuth])


      const contextValue = {
        user,
        userdata,
        userAuth,
        fetchData,
        fetchUserPost, 
        LogOut,
      }

    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    )
}