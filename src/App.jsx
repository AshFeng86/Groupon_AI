import { useState } from "react";
import ChatWindow from "./components/Chat/ChatWindow";
import Sidebar from "./components/Sidebar/Sidebar";
import LoadingIndicator from "./components/UI/LoadingIndicator"; // Import the new component

const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleSendMessage = async () => {
    setLoading(true); // Set loading to true when sending a message

    // Simulate an API call or delay (replace this with actual API call)
    setTimeout(() => {
      // After getting a response
      setLoading(false); // Set loading to false when response is received
    }, 2000);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />

      {/* Main Chat Area */}
      <div className="flex-1 flex justify-center items-center transition-all duration-300">
        <div className="w-full h-[100vh] bg-white rounded-lg shadow-lg flex flex-col">
          {loading ? (
            <LoadingIndicator />
          ) : (
            <ChatWindow onSendMessage={handleSendMessage} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
