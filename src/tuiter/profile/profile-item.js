import React, {useState} from "react";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "./profile-reducer";

const ProfileItem = (
    {
        post = {
            "firstName": "Jose",
            "lastName": "Annunziato",
            "handle": "@jannunzi",
            "profilePicture": "react.png",
            "bannerPicture": "polyglot.jpeg",
            "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
            "website": "youtube.com/webdevtv",
            "location": "Boston, MA",
            "dateOfBirth": "7/7/1968",
            "dateJoined": "4/2009",
            "followingCount": 340,
            "followersCount": 223
        }
    }
) => {
    const [isEdit, setIsEdit] = useState(false)
    const editChangeTrueHandler = (event) => {
        setIsEdit(true)
    }
    const editChangeFalseHandler = () => {
        setIsEdit(false)
    }
    const defaultProfile = useSelector(state => state.profile)
    const [profile] = useState(defaultProfile)
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dateOfBirth] = useState(profile.dateOfBirth);
    let [nameChanged, setNameChanged] = useState(false);
    let [bioChanged, setBioChanged] = useState(false);
    let [locationChanged, setLocationChanged] = useState(false);
    let [websiteChanged, setWebsiteChanged] = useState(false);

    function handleNameChange(e) {
        const newName = e.target.value.split(" ");
        setFirstName(newName[0]);
        setLastName(newName[1]);
        setNameChanged(true);
    }
    function handleBioChange(e) {
        const newBio = e.target.value;
        setBio(newBio);
        setBioChanged(true);
    }

    function handleLocationChange(e) {
        const newLocation = e.target.value;
        setLocation(newLocation);
        setLocationChanged(true);
    }

    function handleWebsiteChange(e) {
        const newWebsite = e.target.value;
        setWebsite(newWebsite);
        setWebsiteChanged(true);
    }

    const dispatch = useDispatch();
    const updateProfileClickHandler = () => {
        setIsEdit(false);
        console.log("name " + nameChanged)
        console.log("bio " + bioChanged)
        console.log("location " + locationChanged)
        console.log("web " + websiteChanged)
        const newProfile = {
            "firstName": nameChanged ? firstName :post.firstName,
            "lastName": nameChanged ? lastName : post.lastName,
            "handle": post.handle,
            "profilePicture": post.profilePicture,
            "bannerPicture": post.bannerPicture,
            "bio": bioChanged ? bio : post.bio,
            "website": websiteChanged ? website : post.website,
            "location": locationChanged ? location : post.location,
            "dateOfBirth": post.dateOfBirth,
            "dateJoined": post.dateJoined,
            "followingCount": post.followingCount,
            "followersCount": post.followersCount
        }
        dispatch(updateProfile(newProfile));
    }
    return (
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-1 ms-3">
                        {isEdit ? <i className="bi bi-x-lg" onClick={editChangeFalseHandler}/> :
                            <i className="bi bi-arrow-left"></i>}
                    </div>
                    <div className="col-10">
                        {isEdit ? (
                            <>
                                <div className="head-wrapper row">
                                    <div className="col-10 fw-bolder align-middle">Edit Profile</div>
                                    <div className="col-2">
                                        <button
                                            className="button rounded-pill btn btn-dark float-end ps-3 pe-3 fw-bold"
                                            onClick={(event) => {
                                                updateProfileClickHandler(event);
                                            }}>
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="head-wrapper row">
                                    <div><span className="fw-bolder">{post.firstName} {post.lastName}</span></div>
                                    <small className="text-muted">6,114 Tweets</small>
                                </div>
                            </>
                        )
                        }
                    </div>
                    <div className="bannerPic position-relative mt-2 mb-2">
                        <img src={`/images/${post.bannerPicture}`} className="w-100" alt=""/>
                    </div>
                    <div className="second-head-wrapper row">
                        <div className="col-2">
                            <img src={`/images/${post.profilePicture}`} width={130}
                                 className="avatarPic float-end rounded-circle wd-nudge-up" alt=""/>
                        </div>
                        {isEdit ? (
                            <></>
                        ) : (
                            <div className="float-right">
                                <button
                                    className="button rounded-pill btn btn-outline-secondary float-end mt-2 ps-3 pe-3 fw-bold"
                                    onClick={editChangeTrueHandler}>
                                    Edit Profile
                                </button>
                            </div>
                        )}
                    </div>
                    {isEdit ? (
                        <>
                            <div className="mt-3">
                                <label htmlFor="Name">Name</label>
                                <input className="form-control" type="text" id="Name"
                                       defaultValue={post.firstName + " " + post.lastName}
                                       onChange={(e) => {
                                           handleNameChange(e);
                                       }
                                       }/>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="Bio">Bio</label>
                                <textarea className="form-control" type="text" id="Bio" defaultValue={post.bio}
                                          onChange={(e) => {
                                              handleBioChange(e);
                                          }}/>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="Location">Location</label>
                                <input className="form-control" type="text" id="Location"
                                       defaultValue={post.location}
                                       onChange={(e) => {
                                           handleLocationChange(e);
                                       }
                                       }/>
                            </div>
                            <div className="mt-3">
                                <input className="form-control" type="text" id="Website" placeholder="Website"
                                       onChange={(e) => {
                                           handleWebsiteChange(e);
                                       }
                                       }/>
                            </div>
                            <div className="mt-3">
                                <div className="small">Birth Date &#183; <a href="/" className="link-primary text-decoration-none">Edit</a></div>
                                <div>{dateOfBirth}</div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="mt-3">
                                <div><span className="fw-bolder h4">{post.firstName} {post.lastName}</span></div>
                                <small className="text-muted">{post.handle}</small>
                            </div>
                            <div className="mt-2">
                                <p>{post.bio}</p>
                            </div>
                            <div className="row text-muted">
                                <div className="col-4">
                                    <i className="bi bi-geo-alt"></i> &nbsp; {post.location}
                                </div>
                                <div className="col-4">
                                    <i className="bi bi-balloon"></i> &nbsp; Born {post.dateOfBirth}
                                </div>
                                <div className="col-4">
                                    <i className="bi bi-calendar3"></i> &nbsp; Joined {post.dateJoined}
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-3">
                                    <span className="fw-bold">{post.followingCount}</span> <span
                                    className="text-muted">Following</span>
                                </div>
                                <div className="col-3">
                                    <span className="fw-bold">{post.followersCount}</span> <span
                                    className="text-muted">Followers</span>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </li>
        </>
    );
};
export default ProfileItem;