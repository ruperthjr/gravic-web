import { useState } from "react";
import { chatWithAI } from "../api/api";

function Chatbot() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleChat = async () => {
    const res = await chatWithAI(message);
    setResponse(res.response || res.error);
  };

  return (
    <div>
      <h2>Ask the AI Chatbot</h2>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Ask something..." />
      <button onClick={handleChat}>Send</button>
      {response && <p><strong>AI Response:</strong> {response}</p>}
    </div>
  );
}

export default Chatbot;
