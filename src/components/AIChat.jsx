// src/components/AIChat.jsx
import { useState, useRef, useEffect } from "react"
import { FaTimes, FaPaperPlane } from "react-icons/fa"
import { projects } from "../data/projects"

function AIChat({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi! I'm Palesa's AI assistant. Ask me anything about her projects, skills, or experience."
    }
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "auto"
  }, [isOpen])

  if (!isOpen) return null

  const sendMessage = () => {
    if (!input.trim()) return

    const userMessage = { role: "user", text: input }
    setMessages((prev) => [...prev, userMessage])

    // Generate dynamic AI reply
    const aiReply = generateAIResponse(input)
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "ai", text: aiReply }])
    }, 700)

    setInput("")
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage()
  }

  // --- AI logic ---
  function generateAIResponse(query) {
    const q = query.toLowerCase()

    // Skills
    if (q.includes("skill") || q.includes("tools") || q.includes("tech stack")) {
      return `Palesa is skilled in frontend development using JavaScript, React, Next.js, Tailwind CSS, HTML5, and CSS3. She also works with Git, GitHub, Canva, Google Workspace, and has experience integrating AI tools.`
    }

    // Projects
    if (q.includes("project") || q.includes("work") || q.includes("portfolio")) {
      let response = "Here are some highlights from Palesa's projects:\n\n"
      projects.forEach((p, i) => {
        response += `${i + 1}. ${p.title} - ${p.description}\nTech: ${p.tech.join(", ")}\n`
        if (p.link) response += `See it here: ${p.link}\n`
        if (p.github) response += `Code: ${p.github}\n`
        response += "\n"
      })
      return response
    }

    // Experience / Bootcamp / Career path
    if (q.includes("experience") || q.includes("career") || q.includes("bootcamp") || q.includes("journey")) {
      return `Palesa started her coding journey at CodeSpace Software Development Bootcamp, where she learned JavaScript, React, and modern frontend frameworks. She has built multiple responsive web apps, handled client websites, and enjoys turning complex ideas into smooth, interactive experiences. Her experience comes from hands-on projects, internships, and freelance work, always focusing on user-friendly design and clean code.`
    }

    // Default / fallback
    return "That's interesting! Palesa has a diverse set of projects and experiences. Try asking about her skills, specific projects, or coding journey."
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
                {msg.text.split("\n").map((line, i) => <p key={i}>{line}</p>)}
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
