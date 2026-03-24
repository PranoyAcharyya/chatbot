"use client";

import { useState } from "react";
import { useEffect, useRef } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReactMarkdown from "react-markdown";

export default function ChatPage() {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("/api/chat", {
        messages: newMessages,
      });

      setMessages([
        ...newMessages,
        { role: "assistant", content: res.data.reply },
      ]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="h-screen flex flex-col container mx-auto">
      {/* Chat Area */}
      <ScrollArea className="flex-1">
  <div className="p-4 space-y-4 h-full flex flex-col">

    {messages.length === 0 ? (
      <div className="flex-1 flex items-center justify-center text-gray-400 text-lg min-h-screen">
        <h1 className="text-2xl md:text-5xl lg:text-7xl">What’s on your mind today?</h1>
      </div>
    ) : (
      <>
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[70%] p-3 rounded-xl text-sm ${
              msg.role === "user"
                ? "bg-black text-white ml-auto"
                : "bg-muted"
            }`}
          >
            <ReactMarkdown>{msg.content}</ReactMarkdown>
          </div>
        ))}

        {loading && (
          <div className="bg-muted p-3 rounded-xl w-fit text-sm">
            Thinking...
          </div>
        )}

        <div ref={bottomRef} />
      </>
    )}

  </div>
</ScrollArea>

      {/* Input */}
      <div className="p-4 border-t flex gap-2 fixed bottom-0 left-0 w-full bg-white">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
        />
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
}
