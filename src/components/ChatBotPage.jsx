import React, { useState } from "react";
import "./ChatBotPage.css"; // ChatBotPage에 대한 CSS 파일 불러오기

export default function ChatBotPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // 사용자 메시지 추가
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // 특허 분석 (여기서 실제 분석 로직을 연결하면 됩니다)
    let botResponse = "특허 분석 정보를 찾을 수 없습니다."; // 기본 응답

    // 예시: 사용자가 특정 키워드를 입력했을 때 특허 설명 제공
    if (input.includes("AI")) {
      botResponse =
        "이 특허는 AI 관련 기술로, 자연어 처리 기반의 챗봇에 해당됩니다.";
    } else if (input.includes("빅데이터")) {
      botResponse =
        "이 특허는 빅데이터 처리 기술에 관한 것으로, 대규모 데이터 분석을 위한 기술입니다.";
    }

    // 챗봇 메시지 추가
    const botMessage = { sender: "bot", text: botResponse };
    setMessages((prev) => [...prev, botMessage]);

    setInput(""); // 입력 필드 초기화
  };

  return (
    <div className="container">
      <div className="header">특허 분석 챗봇</div>
      <div className="chatbot-container">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`message ${
              msg.sender === "user" ? "message-user" : "message-bot"
            }`}
          >
            <div className="message-text">{msg.text}</div>
          </div>
        ))}
        <div className="input-container">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="분석할 특허 내용을 입력하세요"
            className="input-field"
          />
          <button onClick={handleSend} className="send-button">
            전송
          </button>
        </div>
      </div>
    </div>
  );
}
