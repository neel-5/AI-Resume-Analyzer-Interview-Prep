import { Bot, Send, UserRound } from "lucide-react";
import { useState } from "react";
import { chatbotApi } from "../api/client.js";
import Button from "../components/Button.jsx";
import GlassCard from "../components/GlassCard.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { apiError, getLatestAnalysis } from "../utils/formatters.js";

export default function Chatbot() {
  const latest = getLatestAnalysis();
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "I can help improve your resume, generate interview questions, or suggest stronger data science projects."
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendMessage = async (event, prompt) => {
    event?.preventDefault();
    const text = (prompt || input).trim();
    if (!text) return;
    setInput("");
    setError("");
    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);
    try {
      const { data } = await chatbotApi.message({
        message: text,
        context: latest || {}
      });
      setMessages((prev) => [...prev, { role: "assistant", text: data.answer, prompts: data.suggested_prompts }]);
    } catch (err) {
      setError(apiError(err, "Chatbot request failed."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="AI Chatbot"
        title="Resume & Interview Coach"
        description="Ask for resume improvements, Python practice, SQL questions, or project ideas using your latest analysis context."
      />
      <GlassCard className="mx-auto max-w-4xl">
        <div className="h-[58vh] min-h-[420px] space-y-4 overflow-y-auto pr-2">
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}`} className={`flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}>
              {message.role === "assistant" ? (
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-mint/10 text-mint">
                  <Bot className="h-5 w-5" />
                </div>
              ) : null}
              <div
                className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.role === "user" ? "bg-mint text-ink" : "border border-white/10 bg-white/[0.05] text-white/70"
                }`}
              >
                {message.text}
              </div>
              {message.role === "user" ? (
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-coral/10 text-coral">
                  <UserRound className="h-5 w-5" />
                </div>
              ) : null}
            </div>
          ))}
          {loading ? <p className="text-sm text-mint">Thinking through your profile...</p> : null}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {["How do I improve my resume?", "Ask me Python interview questions", "What projects should I add?"].map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={(event) => sendMessage(event, prompt)}
              className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 text-xs text-white/60 transition hover:border-mint/40 hover:text-mint"
            >
              {prompt}
            </button>
          ))}
        </div>

        <form onSubmit={sendMessage} className="mt-4 flex gap-3">
          <input
            className="field"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask HireSense AI"
          />
          <Button type="submit" icon={Send} loading={loading}>
            Send
          </Button>
        </form>
        {error ? <p className="mt-4 rounded-xl bg-coral/10 px-4 py-3 text-sm text-coral">{error}</p> : null}
      </GlassCard>
    </>
  );
}
