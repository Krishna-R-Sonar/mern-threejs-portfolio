// client/src/components/Dashboard/MessageList.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

const MessageList = ({ darkMode }) => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const secret = searchParams.get("secret");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/messages?secret=${secret}`);
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
        toast.error(error.response?.data?.error || "Failed to load messages");
      } finally {
        setIsLoading(false);
      }
    };

    if (secret) {
      fetchMessages();
    } else {
      setIsLoading(false);
    }
  }, [secret]);

  if (!secret) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="text-red-500 text-lg sm:text-xl">Unauthorized Access</div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen p-4 sm:p-8 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <h2 className={`text-xl sm:text-2xl font-bold mb-6 ${darkMode ? "text-white" : "text-gray-800"}`}>Messages</h2>
      <ul className="space-y-4 max-w-4xl mx-auto">
        {messages.map((msg) => (
          <li
            key={msg._id}
            className={`p-4 rounded-lg shadow ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"}`}
          >
            <div className="font-semibold text-sm sm:text-base">{msg.name}</div>
            <div className="text-sm text-blue-500">{msg.email}</div>
            <p className="mt-2 text-sm sm:text-base">{msg.message}</p>
            <div className="text-xs text-gray-500 mt-2">{new Date(msg.createdAt).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;