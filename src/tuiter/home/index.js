import React from "react";
import tweetsArrays from './tweets.json';
import HomeComponent from "./home-item.js";
import "./index.css";

const HomeScreen = () => {
    return (
        <ul className="list-group">
            {
                tweetsArrays.map(tweets =>
                    <HomeComponent
                        key={tweets._id} tweets={tweets}/>
                )
            }
        </ul>
    )
}
export default HomeScreen;