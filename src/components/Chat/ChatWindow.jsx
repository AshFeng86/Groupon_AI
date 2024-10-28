import { useState } from "react";
import ScrollToRecentMessage from "./ScrollToRecentMessage";
import ChatInput from "./ChatInput";
import ErrorMessage from "../UI/ErrorMessage"; // Import the ErrorMessage component
import axios from "axios";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your Groupon assistant! How can I help you today?",
    },
  ]);
  const [error, setError] = useState(null); // Add error state

  const handleSendMessage = async (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: message },
    ]);
    setError(null); // Clear previous error

    try {
      const response = await axios.post("http://localhost:5001/api/chat", {
        message: message,
        model: "Groq",
      });

      const assistantResponse = response.data.response;

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: assistantResponse },
      ]);
    } catch (error) {
      console.error("Error getting response from backend:", error);
      setError("Sorry, I encountered an error while processing your request.");
    }
  };

  const handleRetry = () => {
    if (messages.length > 0) {
      // Re-attempt the last user message if there's one
      handleSendMessage(messages[messages.length - 1].content);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="bg-green-600 text-white flex items-center justify-center p-4 font-bold text-lg space-x-2">
        <span>Groupon Assistant</span>
      </div>

      {/* Message List */}
      <ScrollToRecentMessage messages={messages} />

      {/* Error Message (conditionally rendered) */}
      {error && <ErrorMessage onRetry={handleRetry} />}

      {/* Chat Input */}
      <div className="border-t p-4">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatWindow;
