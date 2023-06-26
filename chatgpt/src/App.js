import { useState } from "react";
import { sendMessageToOpenAI } from "./openai";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = async () => {
    const response = await sendMessageToOpenAI(input);
    setMessages([
      ...messages,
      { text: input, isUser: true },
      { text: response, isUser: false },
    ]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Ask AnythingAI</h1>
      <div className="chat">
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.isUser ? "user-message" : "ai-message"}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleMessageSubmit}>Send</button>
      </div>
    </div>
  );
}

export default App;
