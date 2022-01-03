import React from "react";
import "./App.css";

export default ({data, time}) => (
    <div className="messagebox">
    <h2>{data.firstName + " " + data.lastName}</h2>
    <div className="sentence">{data.pt1 + data.pt2 + data.pt3 + data.pt4}</div>
    <div className="date"><br></br>posted on {time.toUTCString()}</div>
    </div>
);