import React from "react";
import TuitsList from "../tuits";
import WhatsHappening from "./whats-happening.js";

const HomeScreen = () => {
    return (
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </>
    )
}
export default HomeScreen;