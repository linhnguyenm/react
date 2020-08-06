import React from 'react'
import './Chats.css';
import Chat from './Chat'
function Chats() {
    return (
        <div className="chats">
            <Chat name="Ronda" message="Hello, this is tinder" timestamp="40 secs ago" 
            profilePic="https://www.gstatic.com/tv/thumb/persons/675431/675431_v9_bb.jpg"/>
            <Chat name="Sarah" message="Hello, What's up" timestamp="23 mins ago" 
            profilePic="https://images.squarespace-cdn.com/content/5bf728cff93fd432c610ee2b/1566976810150-9OFAIS8LXNMO3FW16C3R/Sarah.jpg?format=1500w&content-type=image%2Fjpeg"/>
            <Chat name="Ellena" message="Could we have a meeting today?" timestamp="2 hours ago" 
            profilePic="https://i.pinimg.com/originals/0a/a1/58/0aa15896ffec774910fc562e956c0749.jpg"/>
            <Chat name="Beatrice" message="You look great 💝 " timestamp="1 day ago" 
            profilePic="https://upload.wikimedia.org/wikipedia/commons/7/7e/Beatrice_of_York_-_2017_%28cropped%29.jpg"/>
        </div>
    )
}

export default Chats
