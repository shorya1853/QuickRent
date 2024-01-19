import { createContext, useState} from "react";
import { db } from "../pages/Auth/firebase.config";
import {doc, getDoc} from 'firebase/firestore';
import { auth } from "../pages/Auth/firebase.config";
import { onAuthStateChanged } from "firebase/auth";

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
            setUser(authUser.uid);
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
            const userRef = doc(db, 'User', user);
            const docSnapshot = await getDoc(userRef);
    
            if (docSnapshot.exists()) {
                const newData = { ...docSnapshot.data(), id: docSnapshot.id };
                setUserdata(newData);
                
            } else {
                console.log('No such document!');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }

        
    };


      const contextValue = {
        userdata,
        userAuth,
        fetchData,
        fetchUserPost
      }

    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    )
}