import React, { useContext, useEffect} from 'react';
import { UserContext } from '../../context/user-context';
// import { UploadImages } from '../../methods/upload-images';
import Avatar from '../../components/Avatar';
import { Link } from 'react-router-dom';

function Profile() {
    const { userdata } = useContext(UserContext);

    // useEffect(() => {
    //     console.log(userdata.uid)
    // })

    return (
        <div>
            <div>
                
                {userdata && (
                    <>
                        
                        <div className="user">
                            <Avatar photoURL={userdata.photoURL} userName={userdata.displayName}/>
                        </div>
                        <Link to="/chats">Chats</Link>
                    </>
                )}
            </div>
           
        </div>
    );
}

export default Profile;