import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = (
    {
        post = {
            "userName": "SpaceX",
            "time": "2h",
            "image": "spacex.jpeg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return (
        <li className="list-group-item">
            <div className="row g-0">
                <div className="col-1">
                    <img className="rounded-circle" height={48} src={`/images/${post.image}`} alt=""/>
                </div>
                <div className="col-11">
                    <div className="tweets-subtitle">
                        <div className="row g-0">
                            <div className="col-10 ms-2">
                                <span className="fw-bold">{post.userName} </span>
                                <i className="bi bi-patch-check-fill" style={{color: "dodgerblue"}}></i>
                                <span style={{color: "dimgray"}}>&nbsp;{post.handle} -{post.time}</span>
                            </div>
                            <div className="dot-wrapper col-1">
                                <i className="bi bi-x-lg float-end"
                                   onClick={() => deleteTuitHandler(post._id)}></i>
                            </div>
                        </div>
                        <div className="tweet-title ms-2">{post.tuit}</div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-3">
                            <i className="bi bi-chat"></i> &nbsp; {post.replies}
                        </div>
                        <div className="col-3">
                            <i className="bi bi-repeat"></i> &nbsp; {post.retuits}
                        </div>
                        {
                            post.liked ? (
                                <div className="col-3">
                                    <i className="bi bi-heart-fill" style={{color: "red"}}></i> &nbsp; {post.likes}
                                </div>
                            ) : (
                                <div className="col-3">
                                    <i className="bi bi-heart"></i> &nbsp; {post.likes}
                                </div>
                            )
                        }
                        <div className="col-3">
                            <i className="bi bi-upload"></i>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;