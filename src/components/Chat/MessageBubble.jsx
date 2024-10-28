import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

const MessageBubble = ({ role, content }) => {
  const isUser = role === "user";

  // Extract image URL from content if present
  const imageUrl = content.match(/!\[Product Image]\((.*?)\)/)?.[1];
  const messageText = content.replace(/!\[Product Image]\(.*?\)/, "").trim();

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      <div
        className={`max-w-4xl p-3 rounded-lg shadow-sm
          ${isUser ? "bg-gray-200 text-black" : "bg-white text-black"}
          ${isUser ? "text-right" : "text-left"}
          text-base md:text-lg`}
      >
        {/* Display message text */}
        <div>
          <ReactMarkdown>{messageText}</ReactMarkdown>
        </div>

        {/* Display image if an image URL is found */}
        {imageUrl && (
          <div className="mt-3">
            <img
              src={imageUrl}
              alt="Product Image"
              className="rounded-lg shadow-md max-w-xs mx-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};

MessageBubble.propTypes = {
  role: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default MessageBubble;
