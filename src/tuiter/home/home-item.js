import React from "react";

const HomeComponent = (
    {
        tweets = {
            "_id": 123,
            "retweeted": true,
            "retweet-content": "Elon Musk Retweeted",
            "avatarIcon": "spacex.jpeg",
            "userName": "SpaceX",
            "handle": "SpaceX",
            "time": "23h",
            "title": "Dennis and Akiko Tito are the first two crewmembers on Starship's second commercial spaceflight around the Moon -> <a href=\"/\" style=\"text-decoration: none\">spacex.com/updates</a>",
            "has-image": true,
            "image": "tesla.jpeg",
            "has-citation": false,
            "citation": [],
            "comment-bar": true,
            "comment": "595",
            "retweet": "1,168",
            "like": "11.1K",
            "has-thread": true,
            "thread-content": "<a href=\"/\" style=\"text-decoration: none\">Show this thread</a>"
        }
    }
) => {
    return (
        <>
            <li className="list-group-item">
                {
                    tweets.retweeted ? (
                        <div className="retweet fw-bold ms-4">&nbsp; <i
                            className="bi bi-repeat"></i> &nbsp; {tweets["retweet-content"]}</div>
                    ) : null
                }
                <div className="row g-0">
                    <div className="col-1">
                        <img className="rounded-circle" height={48} src={`/images/${tweets.avatarIcon}`} alt=""/>
                    </div>
                    <div className="col-11">
                        <div className="tweets-subtitle">
                            <div className="row g-0">
                                <div className="col-10 ms-2">
                                    <span className="fw-bold">{tweets.userName} </span>
                                    <i className="bi bi-patch-check-fill" style={{color: "dodgerblue"}}></i>
                                    <span style={{color: "dimgray"}}>&nbsp;@{tweets.handle} -{tweets.time}</span>
                                </div>
                                <div className="dot-wrapper col-1">
                                    <i className="bi bi-three-dots"></i>
                                </div>
                            </div>
                            <div className="tweet-title ms-2" dangerouslySetInnerHTML={{__html: tweets.title}}></div>
                        </div>
                        {
                            tweets["has-image"] ? (
                                <div className="main-image mt-2">
                                    <img className="w-100" src={`/images/${tweets.image}`} alt=""/>
                                </div>
                            ) : null
                        }
                        {
                            tweets["has-citation"] ? (
                                <div className="main-citation mt-2">
                                    <div className="row">
                                        <div className="col-12 ms-2 mt-2">
                                            <img className="rounded-circle" height={22} src={`/images/${tweets.citation[0].avatarIcon}`} alt=""/>
                                            <span className="fw-bold">&nbsp;{tweets.citation[0].userName} </span>
                                            <i className="bi bi-patch-check-fill" style={{color: "dodgerblue"}}></i>
                                            <span
                                                style={{color: "dimgray"}}>&nbsp;@{tweets.citation[0].handle} -{tweets.citation[0].time}</span>
                                        </div>
                                        <div className="tweets-subtitle">
                                            <div className="tweet-title ms-2 mb-2"
                                                 dangerouslySetInnerHTML={{__html: tweets.citation[0].title}}></div>
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        }
                        <div className="row mt-2">
                            <div className="col-3">
                                <i className="bi bi-chat"></i> &nbsp; {tweets.comment}
                            </div>
                            <div className="col-3">
                                <i className="bi bi-repeat"></i> &nbsp; {tweets.retweet}
                            </div>
                            <div className="col-3">
                                <i className="bi bi-heart"></i> &nbsp; {tweets.like}
                            </div>
                            <div className="col-3">
                                <i className="bi bi-upload"></i>
                            </div>
                        </div>
                        {
                            tweets["has-thread"] ? (
                                <div className="tweets-thread mt-3 mb-2">
                                    <div className="tweet-title"
                                         dangerouslySetInnerHTML={{__html: tweets["thread-content"]}}></div>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </li>
        </>
    );
};
export default HomeComponent;