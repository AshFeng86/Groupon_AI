import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import PropTypes from "prop-types";

// Scroll to the latest message whenever messages are updated
const ScrollToRecentMessage = ({ messages }) => {
  const lastMessageRef = useRef(null);
  const containerRef = useRef(null);

  // Use MutationObserver to handle cases where images load after the DOM update
  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current, {
        childList: true,
        subtree: true,
      });
    }

    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, []);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4" ref={containerRef}>
      <div className="space-y-4">
        {messages.map((msg, index) => (
          <MessageBubble key={index} role={msg.role} content={msg.content} />
        ))}
        {/* Dummy div for scroll reference */}
        <div ref={lastMessageRef} />
      </div>
    </div>
  );
};

ScrollToRecentMessage.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      role: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ScrollToRecentMessage;
