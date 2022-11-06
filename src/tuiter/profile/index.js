import React from "react";
import ProfileItem from "./profile-item.js";
import {useSelector} from "react-redux";

const ProfileComponent = () => {
    const bioArray = useSelector(state => state.profile)
    return(
        <ul className="list-group">
            {
                bioArray.map(post =>
                    <ProfileItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default ProfileComponent;