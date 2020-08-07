import React, { useState } from 'react'
import './ChatScreen.css'
import Avatar from '@material-ui/core/Avatar'
function ChatScreen() {
    const [input, setInput] = useState([]);
    const [messages, setMessages] = useState([
        {
            name: "Ellena",
            image: "https://i.pinimg.com/originals/0a/a1/58/0aa15896ffec774910fc562e956c0749.jpg",
            message: "Whats up",
        },
        {
            name: "Ellena",
            image: "https://i.pinimg.com/originals/0a/a1/58/0aa15896ffec774910fc562e956c0749.jpg",
            message: "How r u today?",
        },
        {
           
            message: "Im doing good",
        }
    ]);
    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages,{ message: input}]);
        setInput("");
    }
    return (
        <div className="chatScreen">
            
            <p className="chatScreen__firstText">YOU MATCHED WITH ELLENA ON 03/08/20</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar className="chatScreen__image"
                    alt={message.name} src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                    </div>

                ) : (
                    <div className="chatScreen__message">
                   
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
                )
                
            ))}
            
                <form className="chatScreen__input">
                    <input value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    type="text" placeholder="Type a message" 
                    className="chatScreen__inputField"/>
                    <button onClick={handleSend} className="chatScreen__inputButton">SEND</button>
                </form>
            
        </div>
    )
}

export default ChatScreen
