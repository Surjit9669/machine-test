import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Header from './Header';


const socket = io('http://localhost:4000', {
    reconnection: true,
    reconnectionDelay: 500,
    transports: ['websocket'],
});

const ChatApp = ({ handleLogout }) => {

    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');

    useEffect(() => {
        socket.on('message', (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });
    }, []);


    const sendMessage = () => {
        if (messageInput.trim() !== '') {
            socket.emit('message', messageInput);
            setMessageInput('');
        }
    };

    return (
        <div className='chatPage'>
            <Header />
            <div className="chat-box">
                <div className="messages">
                    {messages.map((message, index) => (
                        <div key={index} className="message">
                            {message}
                        </div>
                    ))}
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        placeholder="Type message "
                    />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default ChatApp

