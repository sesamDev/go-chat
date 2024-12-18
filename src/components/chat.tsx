import React from "react"
import useContactStore from "../hooks/useContactStore"
import { useState } from "react"

interface ChatHeaderProps {
  name?: string,
  avatar?: string
}

const ChatHeader = ({ name, avatar }: ChatHeaderProps) => {
  if (name == null || avatar == null) {
    return <></>
  }

  return (
    <div className="bg-stone-700 flex">
      <img src={avatar} alt="Profile picture" />
      <p>{name}</p>
    </div>
  )
}

const Viewport = () => {
  return <div className="flex overflow-auto">This is the viewport</div>
}

const MessageInput = ({ onSubmit }: { onSubmit: (message: string) => void }) => {
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form reload
    if (message.trim()) {
      onSubmit(message); // Call the parent handler with the message
      setMessage(''); // Clear the input field after submission
    }
  };

  return (
    <div id="message-input" className="flex shrink-0 min-w-full">
      <form className="flex w-full" onSubmit={handleFormSubmit}>
        <input
          className="w-full"
          type="text"
          placeholder="Write a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="shrink-0 m-2" type="submit">Send</button>
      </form>
    </div>
  );
};

export default function Chat() {
  const { contact } = useContactStore()

  const handleSubmit = (message: string) => {
    console.log('Message submitted:', message);
  };

  return (
    <div className="flex flex-col bg-stone-800 h-full justify-between">
      {contact.name ? <>
        <ChatHeader name={contact.name} avatar={contact.avatar} />
        <Viewport />
        <MessageInput onSubmit={handleSubmit} /> </> : <>Select a chat</>}
    </div>
  )
}
