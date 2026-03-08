import { useState, useRef, useEffect } from "react"
import { FaTimes, FaPaperPlane } from "react-icons/fa"

function AIChat({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi! I'm Palesa's AI assistant. Ask me anything about her skills, projects, or experience."
    }
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  if (!isOpen) return null

  const sendMessage = () => {
    if (!input.trim()) return

    const userMessage = { role: "user", text: input }
    setMessages((prev) => [...prev, userMessage])

    // Fake AI response (placeholder, you can hook OpenAI later)
    const aiReply = {
      role: "ai",
      text: "Thanks for your question! Palesa is a frontend developer skilled in React, JavaScript, and building responsive web applications."
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, aiReply])
    }, 600)

    setInput("")
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-6">

      <div className="relative bg-black/70 backdrop-blur-md border border-gray-800 rounded-2xl w-full max-w-xl h-[600px] flex flex-col">

        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <h3 className="text-white font-semibold">Ask Palesa's AI</h3>
          <button
            onClick={onClose}
            className="text-white hover:text-red-400 z-50"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-[70%] text-sm
                  ${msg.role === "user"
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800/80 text-gray-200"
                  }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-800 flex gap-3">
          <input
            type="text"
            placeholder="Ask about Palesa..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 bg-gray-900/70 border border-gray-700 rounded-lg px-4 py-2 text-white outline-none placeholder-gray-400"
          />
          <button
            onClick={sendMessage}
            className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-500 transition"
          >
            <FaPaperPlane />
          </button>
        </div>

      </div>
    </div>
  )
}

export default AIChat