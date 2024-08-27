"use client";
import { Button, Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { IoPersonCircle, IoSendSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: "chat_1",
      avatar: <IoPersonCircle className="w-10 h-10 rounded-full" />,
      name: "abc",
      message: "hello, how are you?",
    },
    {
      id: "chat_2",
      avatar: <IoPersonCircle className="w-10 h-10 rounded-full" />,
      name: "def",
      message: "wasup?",
    },
  ]);

  const chat = [
    {
      id: "chat_1",
      avatar: <IoPersonCircle className='w-10 h-10 rounded-full' />,
      name: "abc",
      message: "hello how are you?"
    },
    {
      id: "chat_2",
      avatar: <IoPersonCircle className='w-10 h-10 rounded-full' />,
      name: "def",
      message: "wasupp?"
    },
    {
      id: "chat_3",
      avatar: <IoPersonCircle className='w-10 h-10 rounded-full' />,
      name: "ghi",
      message: "hello?"
    },
    {
      id: "chat_1",
      avatar: <IoPersonCircle className='w-10 h-10 rounded-full' />,
      name: "abc",
      message: "hello how are you?"
    },
    {
      id: "chat_2",
      avatar: <IoPersonCircle className='w-10 h-10 rounded-full' />,
      name: "def",
      message: "wasupp?"
    },
    {
      id: "chat_3",
      avatar: <IoPersonCircle className='w-10 h-10 rounded-full' />,
      name: "ghi",
      message: "hello?"
    },{
      id: "chat_1",
      avatar: <IoPersonCircle className='w-10 h-10 rounded-full' />,
      name: "abc",
      message: "hello how are you?"
    },
    {
      id: "chat_2",
      avatar: <IoPersonCircle className='w-10 h-10 rounded-full' />,
      name: "def",
      message: "wasupp?"
    },
    {
      id: "chat_3",
      avatar: <IoPersonCircle className='w-10 h-10 rounded-full' />,
      name: "ghi",
      message: "hello?"
    },
    // More chat entries...
  ];

  const [newMessage, setNewMessage] = useState("");
  const [selectedChat, setSelectedChat] = useState(null); // State to track the selected chat

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: `chat_${messages.length + 1}`, avatar: <IoPersonCircle className='w-10 h-10 rounded-full' />, name: "You", message: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <>
      <div className='flex flex-row gap-3 border border-red-800 min-h-fit min-w-fit p-2 m-2'>
        <div className='border border-green-500 w-[350px] h-[800px] overflow-y-auto scrollbar-hidden'>
          <div className='flex flex-col'>
            <h1 className=' ml-4 mt-4 text-xl'>Chat List</h1>
            {chat.map((el) => (
              <div 
                key={el.id} 
                className='flex m-2 w-[330px] h-[75px] border border-gray-700 rounded-md bg-gray-100 p-2 mb-2 cursor-pointer'
                onClick={() => setSelectedChat(el)}
              >
                <div className='flex flex-row gap-2'>
                  {el.avatar}
                  <div className='text-gray-800'>
                    <div className='font-bold'>{el.name}</div>
                    <div>{el.message}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col border border-blue-500 w-[1080px] h-[800px]'>
          {/* Header */}
         
            {selectedChat ? (
              <>
               < div className='flex items-center gap-2 p-4 rounded-md border-b border-gray-300'>
                {selectedChat.avatar}
                <div className='flex flex-col'>
                  <h1 className='font-bold'>{selectedChat.name}</h1>
                  <h5 className='text-blue-800'>Online</h5>
                </div>
                </div>
              </>
            ) : (
              <div className='flex flex-col justify-center items-center h-full'>
              <h1 className='font-semibold text-[30px]'>Select a Chat</h1>
              <h5 className='text-gray-600'>To Start Conversation</h5>
            </div>
            )}
          

          {/* Chat Area */}
          <div className='flex-1 overflow-y-auto p-4'>
            {selectedChat && messages.map((el, index) => (
              <div key={index} className={`flex mb-2 ${el.name === "You" ? "justify-end" : "justify-start"}`}>
                <div className={`p-2 rounded-md ${el.name === "You" ? "bg-blue-200" : "bg-gray-200"}`}>
                  <div className='font-bold'>{el.name}</div>
                  <div>{el.message}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Send Message */}
          {selectedChat && (
            <div className='p-2 border-t rounded-md border-gray-300'>
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' ? handleSend() : null}
                endContent={
                  <Button size="sm" color='primary' variant="solid" onClick={handleSend}>
                    <IoSendSharp className="text-2xl text-default-400 pointer-events-none" />
                  </Button>
                }
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Chat;
