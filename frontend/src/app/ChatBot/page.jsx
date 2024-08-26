"use client"
import { Button, Input, Spacer } from '@nextui-org/react';
import React from 'react';
import { IoPersonCircle, IoSendSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
const Chat = () => {
  const chat = [
    {
      id: "chat_1",
      avatar:<IoPersonCircle className='w-10 h-10 rounded-full'/>,
      name: "abc",
      message: "hello how are you?"
    },
    {
      id: "chat_2",
      avatar: <IoPersonCircle className='w-10 h-10 rounded-full'/>,
      name: "def",
      message: "wasupp?"
    },
    {
      id: "chat_3",
      avatar: <IoPersonCircle className='w-10 h-10 rounded-full'/>,
      name: "ghi",
      message: "hello?"
    },
    {
        id: "chat_1",
        avatar:<IoPersonCircle className='w-10 h-10 rounded-full'/>,
        name: "abc",
        message: "hello how are you?"
      },{
        id: "chat_1",
        avatar:<IoPersonCircle className='w-10 h-10 rounded-full'/>,
        name: "abc",
        message: "hello how are you?"
      },{
        id: "chat_1",
        avatar:<IoPersonCircle className='w-10 h-10 rounded-full'/>,
        name: "abc",
        message: "hello how are you?"
      },
      {
        id: "chat_1",
        avatar:<IoPersonCircle className='w-10 h-10 rounded-full'/>,
        name: "abc",
        message: "hello how are you?"
      },{
        id: "chat_1",
        avatar:<IoPersonCircle className='w-10 h-10 rounded-full'/>,
        name: "abc",
        message: "hello how are you?"
      },{
        id: "chat_1",
        avatar:<IoPersonCircle className='w-10 h-10 rounded-full'/>,
        name: "abc",
        message: "hello how are you?"
      },{
        id: "chat_1",
        avatar:<IoPersonCircle className='w-10 h-10 rounded-full'/>,
        name: "abc",
        message: "hello how are you?"
      },{
        id: "chat_1",
        avatar:<IoPersonCircle className='w-10 h-10 rounded-full'/>,
        name: "abc",
        message: "hello how are you?"
      },
  ];

  return (
    <>
      <div className='flex flex-row gap-3 border border-red-800 min-h-fit min-w-fit p-2 m-2'>
        <div className='border border-green-500 w-[350px] h-[800px] overflow-y-auto scrollbar-hidden'>
          <div className='flex flex-col '>
            <h1 className='ml-4 mt-4 text-xl'> Chat</h1>
            {chat.map((el) => (
              <div key={el.id} className='flex m-2 w-[330px] h-[75px] border border-gray-700 rounded-md bg-gray-100 p-2 mb-2'>
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
        <div className=' flex flex-col  border border-blue-500 w-[1080px] h-[800px]'>
            <div className='flex flex-col w-[1060px] h-[770px] m-2 border border-red-400 '>
                <div className=' flex flex-row gap-2 ml-4 m-4 w-[1020px] h-[50px] border border-green-200'>
                <div className='mt-1 ' ><FaUser className='w-10 h-10 rounded-full'/></div>
                <div className=' flex flex-col'>
                    <h1 className='font-bold'>Name</h1>
                    <h5 className='text-blue-800'>Online</h5>
                </div>
                </div>
                <div className=''>

                </div>
            </div>
            <div className='w-[1060px] h-[50px] m-2 border rounded-md border-green-400 flex items-center'>
            <Input
            placeholder="Type your message..."
            endContent={
                <Button size="sm" color='primary' variant="faded"> 
                < IoSendSharp className="text-2xl text-default-400 pointer-events-none" />
                </Button>
            }
          />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
