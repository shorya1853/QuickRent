import React, {useContext} from 'react';
import { UserContext } from '../../context/user-context';

function Profile() {
    const {userdata} = useContext(UserContext);
    return (
        <div>
            {userdata && (
                <>
                    <p>{userdata.UserName}</p>
                    <p>{userdata.Email}</p>
                </>
            )}
        </div>
    );
}

export default Profile;