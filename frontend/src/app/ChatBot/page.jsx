"use client";
import { Button, Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { IoPersonCircle, IoSendSharp, IoHappyOutline, IoCheckmarkDoneAll, IoCheckmarkDone } from "react-icons/io5";
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: "chat_1",
      avatar: <IoPersonCircle className="w-10 h-10 rounded-full" />,
      name: "abc",
      message: "hello, how are you? ",
      status: "received"
    },
    {
      id: "chat_2",
      avatar: <IoPersonCircle className="w-10 h-10 rounded-full" />,
      name: "def",
      message: "wasup? ",
      status: "received"
    },
  ]);

  const chat = [
    {
      id: "chat_1",
      avatar: <IoPersonCircle className='w-10 h-10 rounded-full' />,
      name: "abc",
      message: "hello how are you? "
    },
    {
      id: "chat_2",
      avatar: <IoPersonCircle className='w-10 h-10 rounded-full' />,
      name: "def",
      message: "wasupp? "
    },
    {
      id: "chat_3",
      avatar: <IoPersonCircle className='w-10 h-10 rounded-full' />,
      name: "ghi",
      message: "hello? "
    },
    {
      id: "chat_4",
      avatar: <IoPersonCircle className='w-10 h-10 rounded-full' />,
      name: "klm",
      message: "what??? "
    },
  ];

  const [newMessage, setNewMessage] = useState("");
  const [selectedChat, setSelectedChat] = useState(null);
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

  const handleSend = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: `chat_${messages.length + 1}`,
        avatar: <IoPersonCircle className='w-10 h-10 rounded-full' />,
        name: "You",
        message: newMessage,
        status: "sent"
      };
      setMessages([...messages, newMsg]);

      // Simulate receiving the message
      setTimeout(() => {
        setMessages(prevMessages =>
          prevMessages.map(msg =>
            msg.id === newMsg.id ? { ...msg, status: "received" } : msg
          )
        );
      }, 5000);

      setNewMessage("");
    }
  };

  const handleEmojiClick = (emoji) => {
    setNewMessage(prevMessage => prevMessage + emoji.emoji);
    setEmojiPickerVisible(false);
  };

  return (
    <>
      <div className='flex flex-row gap-3 min-h-fit min-w-fit p-2 m-2'>
        {/* {whom to chat area} */}
        <div className='border border-black rounded-xl w-[350px] h-[800px] overflow-y-auto scrollbar-hidden'>
          <div className='flex flex-col'>
            <h1 className='ml-4 mt-4 text-xl'>Chat List</h1>
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
        <div className='flex flex-col border border-black rounded-xl w-[1080px] h-[800px]'>
          {/* Header */}
          {selectedChat ? (
            <>
              <div className='flex items-center gap-2 p-2 m-2 rounded-md border border-gray-300'>
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
                <div className={`p-2 rounded-md ${el.name === "You" ? "bg-blue-300" : "bg-gray-200"}`}>
                  <div className='font-semibold'>{el.name}</div>
                  <div>{el.message}</div>
                  {el.name === "You" && el.status === "sent" && (
                    <div className='flex justify-end text-gray-500'>
                      {el.status === "received" ? (
                        <IoCheckmarkDoneAll className='text-blue-500' />
                      ) : (
                        <IoCheckmarkDone className='text-gray-500' />
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Send Message */}
          {selectedChat && (
            <div className='relative  m-2 p-2 border rounded-md border-gray-300'>
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
                className="pr-8" // Add enough padding to the right to accommodate both buttons
              />
              <Button
                size="sm"
                className="absolute top-3 right-4"
                onClick={() => setEmojiPickerVisible(!emojiPickerVisible)}
              >
                <IoHappyOutline className="text-2xl" />
              </Button>
              {emojiPickerVisible && (
                <div className='absolute bottom-12 right-0'>
                  <EmojiPicker onEmojiClick={handleEmojiClick} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Chat;
