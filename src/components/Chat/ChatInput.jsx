import { useState } from "react";
import PropTypes from "prop-types";

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center space-x-2 w-full"
    >
      {/* "+" Button with Hover Tooltip */}
      <div className="relative">
        <button
          type="button"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
        >
          +
        </button>
      </div>

      {/* Message Input Field */}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Send Button */}
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
      >
        Send
      </button>
    </form>
  );
};

ChatInput.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
};

export default ChatInput;
