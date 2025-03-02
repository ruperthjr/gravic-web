import { useState } from "react";
import ChatBot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";

function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-10">
      {open && (
        <div className="shadow-lg">
          <ChatBot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
        </div>
      )}
      <button
        className="bg-accent text-white px-4 py-2 rounded-full shadow-lg mt-2 hover:bg-yellow-500 transition duration-300"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close Chat" : "Chat with AI 🤖"}
      </button>
    </div>
  );
}

export default Chatbot;
